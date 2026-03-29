"use client";

import { useRef, type FormEvent, useEffect } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handler = (e: Event) => {
      e.preventDefault();
      handleSubmit(e as any);
    };

    form.addEventListener("submit", handler);
    return () => form.removeEventListener("submit", handler);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = formRef.current;
    if (!formElement) return;

    const form = new FormData(formElement);

    const data = {
      name: form.get("name"),
      company: form.get("company"),
      email: form.get("email"),
      message: form.get("message"),
    };

    alert("送信中です…少々お待ちください。");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error("送信エラー: " + errText);
      }

      alert("送信が完了しました！");
      formElement.reset();
    } catch (err: any) {
      alert("エラー内容:\n" + err.message);
    }
  };

  return (
    <form ref={formRef} className="grid gap-3 sm:max-w-lg">
      <input
        name="name"
        className="border rounded-md px-3 py-2"
        placeholder="お名前"
        required
      />
      <input
        name="company"
        className="border rounded-md px-3 py-2"
        placeholder="会社名（任意）"
      />
      <input
        name="email"
        className="border rounded-md px-3 py-2"
        placeholder="メールアドレス"
        type="email"
        required
      />
      <textarea
        name="message"
        className="border rounded-md px-3 py-2 min-h-28"
        placeholder="ご相談内容"
        required
      />

      <button
        type="submit"
        className="inline-flex justify-center rounded-md px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
      >
        送信
      </button>
    </form>
  );
}
