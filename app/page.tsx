"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [logoSrc, setLogoSrc] = useState("/header-logo.png"); // ← 初期は白ロゴ
  const [headerClass, setHeaderClass] = useState(
    "bg-white/10 backdrop-blur-sm text-white"
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setHeaderClass("bg-white shadow-sm text-slate-800");
        setLogoSrc("/header-logo-dark.png"); // 黒ロゴ
      } else {
        setHeaderClass("bg-white/10 backdrop-blur-sm text-white");
        setLogoSrc("/header-logo.png"); // 白ロゴ
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
    absolute 
    z-10
    left-1/2 
    top-[32vh]
    -translate-x-1/2
    text-center
    px-5
    w-full
    max-w-4xl
  "
>

  <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug drop-shadow">
    身体は最も重要な資源
  </h1>

  <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug drop-shadow mt-3">
    組織に健康の<span className="text-red-600">火を灯す</span>
  </h1>

  {/* ←ここを中央揃え＆max-w 同じく揃える */}
  <p className="mt-6 text-white/90 text-sm sm:text-base drop-shadow mx-auto max-w-3xl text-center">
    産業保健師・カウンセラー・トレーナーの専門チームが<br />
    コンサル・研修・現場実装までワンストップで支援します。
  </p>

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

      {/* ===== Contact ===== */}
      <section id="contact" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <h2 className="text-xl sm:text-2xl font-bold">お問い合わせ</h2>

         {/* <p className="mt-3 text-slate-600">
            オンライン面談で現状整理と進め方をご提案します。下記フォームよりご連絡ください。
          </p>*/}

          <div className="mt-6 rounded-xl bg-white border border-slate-200 shadow-md p-1 sm:p-3">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeP20Jc8VzrRTXKgMxN14gtnkLj_ZU-J5IT1TuG-eYoP9ub6Q/viewform?embedded=true"
              width="100%"
              height="1000"
              className="rounded-lg"
            />
          </div>

        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-500">

          
    {/* 
    <div className="flex items-center gap-2">
      <Image
        src="/header-logo-dark.png"
        alt=""
        width={200}
        height={100}
        className="h-4 w-auto opacity-70"
      />
      <span className="font-medium text-slate-700">Vital Works</span>
    </div>

    <div className="mt-2">所在地：東京都◯◯区</div>
    <div className="mt-1">メール：info@vitalworks.jp</div>
    */}

          <a href="#" className="mt-2 inline-block hover:text-emerald-600">
            プライバシーポリシー
          </a>

          <div className="mt-6">
            © {new Date().getFullYear()} Vital Works
          </div>

        </div>
      </footer>

    </main>
  );
}

/* ===== Components ===== */

function ServiceCard({ icon, title, bullets }: { icon: React.ReactNode; title: string; bullets: string[] }) {
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
      <p className="text-slate-600 mt-1 text-sm leading-relaxed">
        {desc}
      </p>
    </li>
  );
}

/* ===== SVG Icons ===== */
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
