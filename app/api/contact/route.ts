import { Resend } from 'resend';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Vercelの環境変数(RESEND_API_KEY)が設定されていません。" }), { status: 500 });
  }

  // リクエスト時にのみResendを初期化する
  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, company, email, message } = body;

    // メール送信の実行
    const { error } = await resend.emails.send({
      from: 'Vital Works <onboarding@resend.dev>',
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'vitalworks2025@gmail.com'],
      subject: `【お問い合わせ】${name}様より`,
      text: `
ウェブサイトから新しいお問い合わせを受け付けました。

【お名前】
${name}

【会社名】
${company || '（未入力）'}

【メールアドレス】
${email}

【お問い合わせ内容】
${message}
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error("Server Error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
