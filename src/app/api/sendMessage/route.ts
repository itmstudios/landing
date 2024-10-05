import { Bot } from 'grammy';
import { NextRequest, NextResponse } from 'next/server';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.CHAT_ID;

if (!botToken || !chatId) {
  throw new Error('Bot token and chat ID must be defined in environment variables');
}

const bot = new Bot(botToken);

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, phone, company, industry, message }:
      { name: string; email: string; phone: string; company: string; industry: string; message: string } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing data' }, { status: 400 });
    }

    const telegramMessage = `
📧 **Email**: ${email}
📞 **Phone**: ${phone || ''}
👤 **Name**: ${name}
🏢 **Company**: ${company || ''}
🏭 **Industry**: ${industry || ''}
💬 **Message**: ${message}
        `;

    await bot.api.sendMessage(chatId as string, telegramMessage);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
