"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [logoSrc, setLogoSrc] = useState("/header-logo.png");
  const [headerClass, setHeaderClass] = useState(
    "bg-white/10 backdrop-blur-sm text-white"
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setHeaderClass("bg-white shadow-sm text-slate-800");
        setLogoSrc("/header-logo-dark.png");
      } else {
        setHeaderClass("bg-white/10 backdrop-blur-sm text-white");
        setLogoSrc("/header-logo.png");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-dvh text-slate-800">

      {/* ===== Header ===== */}
      <header
        id="site-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="mx-auto max-w-6xl h-14 px-5 flex items-center justify-between pt-2">
          <a href="#top" className="flex items-center gap-3">
            <Image
              id="header-logo"
              src={logoSrc}
              alt="Vital Works"
              width={180}
              height={40}
              className="object-contain transition-opacity duration-300"
              priority
            />
          </a>

          <nav className="hidden sm:flex gap-6 text-sm transition-colors duration-300">
            <a href="#team" className="hover:opacity-70">メンバー</a>
            <a href="#services" className="hover:opacity-70">サービス</a>
            <a href="#benefits" className="hover:opacity-70">メリット</a>
            <a href="#contact" className="hover:opacity-70">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative h-[140vh] flex items-center">
        <Image
          src="/hero-usv3.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div
          className="
            relative z-10 
            mx-auto max-w-6xl 
            px-5 mt-[-40px] 
            text-left
            sm:ml-[calc(50%-460px)]
          "
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug drop-shadow">
            健康は、組織の成長エンジン
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug drop-shadow">
            人の健康が強くなると、成果は加速する
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug drop-shadow mt-3">
            人の力を、経営の力へ
          </h1>

          <p className="mt-6 text-white/90 text-sm sm:text-base drop-shadow max-w-none">
            産業保健師・心理士・トレーナーの専門チームが健康戦略の設計から現場実装まで伴走します
          </p>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section id="team" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-xl sm:text-2xl font-bold">Team ─ メンバー紹介</h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
            現場で培った経験を持つ3名の専門家が、組織の健康課題に伴走します。
            それぞれの得意分野を掛け合わせ、設計から実装まで一気通貫でサポートします。
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <MemberCard
              imgSrc="/member-fumiya.png"
              imgAlt="Fumiya Murakami"
              name="Fumiya Murakami"
              role="産業保健師"
              tagline="組織に健康の火を灯す“実装型”の専門家。働く人の行動変容を支援。"
              tags={["安全衛生", "リスク管理", "健康経営", "組織支援", "データ利活用"]}
            />

            <MemberCard
              imgSrc="/member-soushi.png"
              imgAlt="Soushi Saito"
              name="Soushi Saito"
              role="心理士"
              tagline="対話を通じて、個人と組織の“もつれ”をほどくカウンセラー。"
              tags={["カウンセリング", "ラインケア", "組織支援", "データ利活用"]}
            />

            <MemberCard
              imgSrc="/member-hirohisa.png"
              imgAlt="Hirohisa Kato"
              name="Hirohisa Kato"
              role="トレーナー"
              tagline="フィジカル面からパフォーマンスを引き上げるトレーナー。"
              tags={["運動指導", "コンディショニング", "健康経営", "健康戦略", "データ利活用"]}
            />
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-xl sm:text-2xl font-bold">サービス内容</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ServiceCard
              icon={<SVGConsult />}
              title="コンサルテーション"
              bullets={[
                "健康経営戦略の立案",
                "健康課題のアセスメント",
                "制度設計・運用伴走",
              ]}
            />

            <ServiceCard
              icon={<SVGSeminar />}
              title="セミナー／研修講師"
              bullets={[
                "メンタルヘルス／ラインケア",
                "生活習慣（睡眠・運動・栄養）",
                "セルフケア＆再発予防",
              ]}
            />

            <ServiceCard
              icon={<SVGCulture />}
              title="組織支援"
              bullets={[
                "健康風土の醸成",
                "職場活性化プログラム",
                "定着支援とモニタリング",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-xl sm:text-2xl font-bold">導入メリット</h2>

          <ul className="mt-6 grid sm:grid-cols-3 gap-4">
            <Benefit title="パフォーマンス回復" desc="プレゼンティーズム／アブセンティーズムの低減" />
            <Benefit title="生産性の向上" desc="個人×組織を同時に整えるアプローチ" />
            <Benefit title="健康文化の定着" desc="仕組み化して持続する健康風土を共創" />
          </ul>
        </div>
      </section>

      {/* ===== Contact（完全修正版） ===== */}
      <section id="contact" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <h2 className="text-xl sm:text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-3 text-slate-600">下記フォームよりご連絡ください。</p>

          <form
            className="grid gap-3 sm:max-w-lg"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = new FormData(e.currentTarget);

              const name = form.get("name");
              const company = form.get("company");
              const email = form.get("email");
              const message = form.get("message");

              alert("送信中です…少々お待ちください。");

              try {
                const GAS_URL =
                  "https://script.google.com/macros/s/AKfycbxM8uK2FX6oGFCDEbDOX-qu7sRYD_Oa7bMU_BHiQcg0FYHM67WW2CwU8Ngzae4ZWnAG/exec";

                console.log("===== フォーム送信開始 =====");
                console.log("name:", name);
                console.log("company:", company);
                console.log("email:", email);
                console.log("message:", message);

                const res = await fetch(GAS_URL, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name,
                    company,
                    email,
                    message,
                  }),
                });

                const text = await res.text();
                alert(
                  "*** デバッグ情報 ***\n" +
                    "HTTPステータス: " +
                    res.status +
                    "\n" +
                    "レスポンス内容: " +
                    text
                );

                if (!res.ok) throw new Error("送信に失敗しました");

                alert("送信が完了しました！\n担当者よりご連絡いたします。");
                e.currentTarget.reset();
              } catch (err) {
                alert("エラー内容: " + JSON.stringify(err));
              }
            }}
          >
            <input name="name" className="border rounded-md px-3 py-2" placeholder="お名前" required />
            <input name="company" className="border rounded-md px-3 py-2" placeholder="会社名（任意）" />
            <input name="email" className="border rounded-md px-3 py-2" placeholder="メールアドレス" type="email" required />
            <textarea name="message" className="border rounded-md px-3 py-2 min-h-28" placeholder="ご相談内容" required />

            <button
              type="submit"
              className="inline-flex justify-center rounded-md px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700"
            >
              送信
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-500">
          <a href="#" className="inline-block hover:text-emerald-600">
            プライバシーポリシー
          </a>
          <div className="mt-6">© {new Date().getFullYear()} Vital Works</div>
        </div>
      </footer>
    </main>
  );
}

/* ===== MemberCard ===== */
function MemberCard({
  imgSrc,
  imgAlt,
  name,
  role,
  tagline,
  tags,
}: {
  imgSrc: string;
  imgAlt: string;
  name: string;
  role: string;
  tagline: string;
  tags: string[];
}) {
  return (
    <article className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/5] bg-slate-100">
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-row flex-col">
        <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-emerald-700 font-medium">{role}</p>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{tagline}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ===== その他コンポーネント ===== */

function ServiceCard({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="p-5 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-md border flex items-center justify-center mb-3 text-emerald-700">
        {icon}
      </div>

      <h3 className="font-semibold">{title}</h3>

      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <a href="#contact" className="mt-4 inline-block text-emerald-700 text-sm hover:underline">
        詳細・ご相談はこちら →
      </a>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="rounded-lg border p-4">
      <div className="font-semibold">{title}</div>
      <p className="text-slate-600 mt-1 text-sm">{desc}</p>
    </li>
  );
}

/* ===== Icons ===== */

function SVGConsult() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 12h10M4 18h8" />
    </svg>
  );
}

function SVGSeminar() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 18h18M6 18V7a2 2 0 012-2h8a2 2 0 012 2v11M8 11h8M8 14h6" />
    </svg>
  );
}

function SVGCulture() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12a8 8 0 0016 0M8 12a4 4 0 008 0" />
    </svg>
  );
}
