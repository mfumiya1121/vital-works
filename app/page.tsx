"use client";

import {
  useEffect,
  useState,
  useRef,
  type FormEvent,
} from "react";
import Image from "next/image";

import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";


export default function Page() {
  const [logoSrc, setLogoSrc] = useState("/header-logo.png");
  const [headerClass, setHeaderClass] = useState(
    "bg-white/10 backdrop-blur-sm text-white"
  );

  // ★ フォーム用の ref
  const formRef = useRef<HTMLFormElement | null>(null);

  // ===== スクロールでヘッダーの背景・ロゴ切り替え =====
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

  // ===== お問い合わせフォーム送信処理（ref 版・安全） =====
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

      // ★★★ ここがポイント：e.currentTarget ではなく ref から reset
      formElement.reset();
    } catch (err: any) {
      alert("エラー内容:\n" + err.message);
    }
  };

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
      <section
        id="top"
        className="
          relative
          h-[90vh]
          sm:h-[100vh]
          flex items-center
          overflow-hidden
        "
      >
        {/* PC 用ヒーロー画像（横長） */}
        <Image
          src="/hero-pc.png"
          alt="Hero Background Desktop"
          fill
          priority
          className="
            hidden sm:block
            object-cover
            object-right-top
          "
        />

        {/* スマホ用ヒーロー画像（縦長 or 引き） */}
        <Image
          src="/hero-sp.png"
          alt="Hero Background Mobile"
          fill
          priority
          className="
            block sm:hidden
            object-cover
            object-center
          "
        />

        {/* うっすら暗くするオーバーレイ */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero テキスト */}
        <div className="relative z-10 max-w-6xl px-5 ml-[8vw] mt-[-40px] text-left">

      {/* ===== PC（1行表示） ===== */}
        <h1 className="hidden sm:block text-5xl font-bold text-white leading-tight drop-shadow max-w-5xl">
          健康は、組織の成長エンジン<br />
          人の健康が強くなると、成果は加速する<br />
          人の力を、経営の力へ
        </h1>

        <p className="hidden sm:block mt-4 text-white/90 text-lg drop-shadow max-w-4xl">
          産業保健師・心理士・トレーナーの専門チームが健康戦略の設計から現場実装まで伴走します
        </p>

      {/* ===== スマホ（行ごとに収めて改行） ===== */}
        <h1 className="block sm:hidden text-2xl font-bold text-white leading-relaxed drop-shadow">
          健康は、組織の成長エンジン<br />
          人の健康が強くなると、<br />
          成果は加速する<br />
          人の力を、経営の力へ
        </h1>

        <p className="block sm:hidden mt-4 text-white/90 text-sm drop-shadow leading-relaxed">
          産業保健師・心理士・トレーナーの専門チームが<br />
          健康戦略の設計から現場実装まで伴走します
        </p>

      </div>

      </section>

      {/* ===== Team ===== */}
      <section id="team" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-xl sm:text-2xl font-bold">Team ─ メンバー紹介</h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
            現場で培った経験を持つ3名の専門家が、組織の健康課題に伴走します。<br />
            それぞれの得意分野を掛け合わせ、設計から実装まで一気通貫でサポートします。
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <MemberCard
              imgSrc="/member-fumiya.png"
              imgAlt="Fumiya Murakami"
              name="Fumiya Murakami"
              role="産業保健師"
              tagline="組織に健康の火を灯す実装型の専門家。働く人の行動変容を支援。"
              tags={["安全衛生", "リスク管理", "健康経営", "組織支援", "データ利活用"]}
            />

            <MemberCard
              imgSrc="/member-soushi.png"
              imgAlt="Soushi Saito"
              name="Soushi Saito"
              role="心理士"
              tagline="対話を通じて、個人と組織のもつれをほどくカウンセラー。"
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

      {/* ===== Contact ===== */}
      <section id="contact" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <h2 className="text-xl sm:text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-3 text-slate-600">下記フォームよりご連絡ください。</p>

          <form
            ref={formRef}
            className="grid gap-3 sm:max-w-lg"> 
          
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
              className="inline-flex justify-center rounded-md px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700"
            >
              送信
            </button>
          </form>
        </div>
      </section>

{/* ===== Footer ===== */}
<footer className="border-t border-slate-200 mt-24">
  <div className="mx-auto max-w-5xl px-6 py-12 text-center">

    {/* --- SNSリンク --- */}
    <div className="flex justify-center gap-6 mb-6">
      <a
        href="https://twitter.com/intent/tweet?text=VITAL%20WORKS%EF%BD%9C%E5%81%A5%E5%BA%B7%E3%81%AF%E3%80%81%E7%B5%84%E7%B9%94%E3%81%AE%E6%88%90%E9%95%B7%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%E3%80%82%0A%E7%94%A3%E6%A5%AD%E4%BF%9D%E5%81%A5%E5%B8%AB%C3%97%E5%BF%83%E7%90%86%E5%A3%AB%C3%97%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8A%E3%83%BC%E3%81%AE%E5%B0%82%E9%96%80%E3%83%81%E3%83%BC%E3%83%A0%E3%81%A7%E4%BC%B4%E8%B5%B0%E6%94%AF%E6%8F%B4%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0Ahttps%3A%2F%2Fvital-works.vercel.app%2F%0A%23%E5%81%A5%E5%BA%B7%E7%B5%8C%E5%96%B6%20%23%E3%82%A6%E3%82%A7%E3%83%AB%E3%83%93%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-slate-700 transition-colors"
      >
       <IconBrandX size={48} />
      </a>
      <a
        href="https://line.me/R/msg/text/?VITAL%20WORKS%EF%BD%9C%E5%81%A5%E5%BA%B7%E3%81%AF%E3%80%81%E7%B5%84%E7%B9%94%E3%81%AE%E6%88%90%E9%95%B7%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%E3%80%82%0A%E7%94%A3%E6%A5%AD%E4%BF%9D%E5%81%A5%E5%B8%AB%C3%97%E5%BF%83%E7%90%86%E5%A3%AB%C3%97%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8A%E3%83%BC%E3%81%AE%E5%B0%82%E9%96%80%E3%83%81%E3%83%BC%E3%83%A0%E3%81%A7%E4%BC%B4%E8%B5%B0%E6%94%AF%E6%8F%B4%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0Ahttps%3A%2F%2Fvital-works.vercel.app%2F%0A%23%E5%81%A5%E5%BA%B7%E7%B5%8C%E5%96%B6%20%23%E3%82%A6%E3%82%A7%E3%83%AB%E3%83%93%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#97A1B1] hover:text-[#4C5564] transition-colors"
      >
        <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
         <path d="M4 12c0-4 3.5-7 8-7s8 3 8 7-3.5 7-8 7c-.9 0-1.8-.1-2.6-.4L6 20l1.1-2.6C5.9 16.1 4 14.3 4 12z" />
    <line x1="9" y1="11" x2="15" y2="11" />
    <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
      </a>
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fvital-works.vercel.app%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-slate-700 transition-colors"
      >
        <IconBrandLinkedin size={48} />
      </a>
    </div>

    {/* --- ナビゲーション --- */}
    <nav className="flex justify-center gap-10 mb-4 text-sm">
      <a
        href="/legal"
        className="text-slate-500 hover:text-slate-700 transition-colors"
      >
        プライバシーポリシー
      </a>
    </nav>

    {/* --- コピーライト --- */}
    <p className="text-xs text-slate-400 tracking-wide mt-4">
      © {new Date().getFullYear()} VITAL WORKS
    </p>
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

      <div className="p-4 flex flex-col">
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

/* ===== ServiceCard ===== */
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

/* ===== Benefit ===== */
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
