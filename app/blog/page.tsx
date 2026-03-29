import { getAllArticles } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { IconClock, IconTag, IconUser } from "@tabler/icons-react";

export const metadata = {
  title: "ブログ | VITAL WORKS",
  description: "産業保健・メンタルヘルス・健康経営に関する最新の知見をお届けします。",
};

export default async function BlogIndex() {
  const articles = await getAllArticles();

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* ===== Header (Simple Version for Blog) ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm h-14 transition-all">
        <div className="mx-auto max-w-6xl h-full px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/header-logo-dark.png"
              alt="Vital Works"
              width={160}
              height={36}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-800">
            <Link href="/#team" className="hover:text-emerald-600">メンバー</Link>
            <Link href="/#services" className="hover:text-emerald-600">サービス</Link>
            <Link href="/blog" className="text-emerald-600 font-bold">ブログ</Link>
            <Link href="/#contact" className="hover:text-emerald-600">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">健康経営・産業保健ブログ</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
            働く人のパフォーマンスを最大化するための、専門的な知見と実践的なTipsを定期的に発信しています。
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
              <Link href={`/blog/${article.slug}`} className="relative aspect-[3/2] block overflow-hidden bg-slate-100 border-b border-slate-100">
                {article.eyecatch && (
                  <Image
                    src={article.eyecatch}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                )}
              </Link>
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <IconClock size={14} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconUser size={14} />
                    {article.author}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4 leading-snug">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <div className="mt-auto pt-6 flex flex-wrap gap-2 border-t border-slate-50">
                  {article.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100/50">
                      <IconTag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* ===== Footer Consistency ===== */}
      <footer className="mt-24 border-t border-slate-200 py-12 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <nav className="flex justify-center gap-10 mb-8 text-sm">
            <Link href="/" className="text-slate-500 hover:text-emerald-600">トップページ</Link>
            <Link href="/legal" className="text-slate-500 hover:text-emerald-600">プライバシーポリシー</Link>
          </nav>
          <p className="text-xs text-slate-400">© 2026 VITAL WORKS</p>
        </div>
      </footer>
    </main>
  );
}
