import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mode, name, phone, date, time, guests, type, location } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('Telegram credentials missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const locationName = location === 'sklyarenka' ? 'Скляренка, 9' : 'Дмитрівська, 62/20';
    const isCalculation = mode === 'calculation';

    let message = '';
    if (isCalculation) {
      const eventTypeMap: Record<string, string> = {
        banquet: 'Банкет',
        wedding: 'Весілля',
        corporate: 'Корпоратив',
        birthday: 'День народження',
      };

      message = `💰 *Новий запит на розрахунок банкету!*\n\n` +
                `📍 *Локація:* ${locationName}\n` +
                `👤 *Ім'я:* ${name}\n` +
                `📞 *Телефон:* ${phone}\n` +
                `📅 *Дата:* ${date}\n` +
                `⏰ *Час:* ${time}\n` +
                `👥 *Кількість гостей:* ${guests}\n` +
                `🎉 *Тип події:* ${eventTypeMap[type] || type}`;
    } else {
      message = `🔔 *Нове бронювання столу!*\n\n` +
                `📍 *Локація:* ${locationName}\n` +
                `👤 *Ім'я:* ${name}\n` +
                `📞 *Телефон:* ${phone}\n` +
                `📅 *Дата:* ${date}\n` +
                `⏰ *Час:* ${time}\n` +
                `👥 *Кількість гостей:* ${guests}`;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
