import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface RequestBody {
  text: string;
  language: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();

    const { text, language } = body;

    const prompt = `Translate ${text} to ${language} language. Give only the translated text and nothing else.`;

    const chat = await model.startChat();
    const res = await chat.sendMessage(prompt);

    const translatedText =
      res?.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
      'Translation failed!';
    return NextResponse.json(
      { status: 'success', data: { translatedText } },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json(
      { message: 'Error processing request' },
      { status: 500 },
    );
  }
}
