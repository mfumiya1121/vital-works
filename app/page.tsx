/* LP: ロゴ小さめ・サービスがすぐ見える・HeroにHeaderを重ねた完全版 */

import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-dvh text-slate-800">

      {/* ===== Header（Hero 画像の上に重ねる） ===== */}
      <header className="absolute top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl h-14 px-5 flex items-center justify-between pt-2">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/vitalworks-logo.png"
              alt="Vital Works"
              width={180}
              height={40}
              className="object-contain"
              priority
            />

          </a>

          <nav className="hidden sm:flex gap-6 text-sm text-white">
            <a href="#services" className="hover:opacity-70">サービス</a>
            <a href="#benefits" className="hover:opacity-70">メリット</a>
            <a href="#contact" className="hover:opacity-70">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero（背景画像 + テキスト） ===== */}
      <section id="top" className="relative h-[80vh] flex items-center">

        {/* 背景画像（あなたの hero 写真を /public/hero.jpg に保存） */}
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* 文字を読みやすくする半透明レイヤー */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero テキスト */}
        <div className="relative z-10 mx-auto max-w-6xl px-5 mt-[-40px]">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug drop-shadow">
            身体は最も重要な資源<br className="hidden sm:block" />
            組織に健康の<span className="text-red-700">火を灯す</span>
          </h1>

          <p className="mt-4 text-white/90 text-sm sm:text-base drop-shadow max-w-2xl">
            産業保健師・カウンセラー・トレーナーの専門チームが、
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
            <Benefit
              title="パフォーマンス回復"
              desc="プレゼンティーズム／アブセンティーズムの低減"
            />
            <Benefit
              title="生産性の向上"
              desc="個人×組織を同時に整える“ELEVATE”アプローチ"
            />
            <Benefit
              title="健康文化の定着"
              desc="仕組み化して持続する健康風土を共創"
            />
          </ul>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <h2 className="text-xl sm:text-2xl font-bold">お問い合わせ</h2>

          <p className="mt-3 text-slate-600">
            オンライン面談で現状整理と進め方をご提案します。下記フォームよりご連絡ください。
          </p>

          <div className="mt-6 rounded-lg border bg-white p-4">
            <p className="text-xs text-slate-500 mb-3">
              ※ 本番は Google フォームの「埋め込み HTML（iframe）」に差し替えてください。
            </p>

            <form className="grid gap-3 sm:max-w-lg">
              <input className="border rounded-md px-3 py-2" placeholder="お名前" />
              <input className="border rounded-md px-3 py-2" placeholder="会社名（任意）" />
              <input className="border rounded-md px-3 py-2" placeholder="メールアドレス" />
              <textarea className="border rounded-md px-3 py-2 min-h-28" placeholder="ご相談内容" />
              <button
                type="button"
                className="inline-flex justify-center rounded-md px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700"
              >
                送信
              </button>
            </form>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            直接のご連絡：info@vitalworks.jp
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-500">

          <div className="flex items-center gap-2">
            <Image
              src="/vital-works-logo.png"
              alt=""
              width={72}
              height={20}
              className="h-4 w-auto opacity-70"
            />
            <span className="font-medium text-slate-700">Vital Works</span>
          </div>

          <div className="mt-2">所在地：東京都◯◯区</div>
          <div className="mt-1">メール：info@vitalworks.jp</div>
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
function ServiceCard({
  icon, title, bullets,
}: { icon: React.ReactNode; title: string; bullets: string[] }) {
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

/* ==== Simple inline SVG icons ==== */
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
