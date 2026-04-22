import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mode, name, phone, date, time, guests, type, location } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN?.replace(/\s/g, '');
    const chatId = process.env.TELEGRAM_CHAT_ID?.replace(/\s/g, '');

    if (!token || !chatId) {
      const missing = [];
      if (!token) missing.push('TELEGRAM_BOT_TOKEN');
      if (!chatId) missing.push('TELEGRAM_CHAT_ID');
      return NextResponse.json({ 
        error: 'Конфігурація сервера неповна', 
        details: `Відсутні змінні: ${missing.join(', ')}. Додайте їх у Settings -> Secrets.` 
      }, { status: 500 });
    }

    const locationName = location === 'sklyarenka' ? 'Скляренка, 9' : 'Дмитрівська, 62/20';
    const isCalculation = mode === 'calculation';

    const escapeHtml = (text: string) => {
      return (text || '')
        .toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    };

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeDate = escapeHtml(date);
    const safeTime = escapeHtml(time);
    const safeGuests = escapeHtml(guests);

    let message = '';
    if (isCalculation) {
      const eventTypeMap: Record<string, string> = {
        banquet: 'Банкет',
        wedding: 'Весілля',
        corporate: 'Корпоратив',
        birthday: 'День народження',
      };
      const safeType = escapeHtml(eventTypeMap[type] || type);

      message = `💰 <b>Новий запит на розрахунок банкету!</b>\n\n` +
                `📍 <b>Локація:</b> ${locationName}\n` +
                `👤 <b>Ім'я:</b> ${safeName}\n` +
                `📞 <b>Телефон:</b> ${safePhone}\n` +
                `📅 <b>Дата:</b> ${safeDate}\n` +
                `⏰ <b>Час:</b> ${safeTime}\n` +
                `👥 <b>Кількість гостей:</b> ${safeGuests}\n` +
                `🎉 <b>Тип події:</b> ${safeType}`;
    } else {
      message = `🔔 <b>Нове бронювання столу!</b>\n\n` +
                `📍 <b>Локація:</b> ${locationName}\n` +
                `👤 <b>Ім'я:</b> ${safeName}\n` +
                `📞 <b>Телефон:</b> ${safePhone}\n` +
                `📅 <b>Дата:</b> ${safeDate}\n` +
                `⏰ <b>Час:</b> ${safeTime}\n` +
                `👥 <b>Кількість гостей:</b> ${safeGuests}`;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      
      let details = errorData.description || 'Unknown Telegram error';
      if (details.includes('group chat was upgraded to a supergroup chat')) {
        details += '. ВАЖЛИВО: Ваш Chat ID змінився. Будь ласка, дізнайтеся новий ID вашої групи (він має починатися з -100) і оновіть його в налаштуваннях.';
      }

      return NextResponse.json({ 
        error: 'Telegram API Error', 
        details: details
      }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
