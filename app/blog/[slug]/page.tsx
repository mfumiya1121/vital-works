import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from 'next/link';
import { IconClock, IconUser, IconChevronLeft, IconTag } from "@tabler/icons-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  
  return {
    title: `${article.metadata.title} | VITAL WORKS`,
    description: article.content.substring(0, 160).replace(/[#\n\*]/g, ""),
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  
  if (!article) notFound();

  const { metadata, content } = article;

  const allArticles = await getAllArticles();
  const recommended = allArticles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const commonTagsA = a.tags.filter((t) => metadata.tags.includes(t)).length;
      const commonTagsB = b.tags.filter((t) => metadata.tags.includes(t)).length;
      if (commonTagsA !== commonTagsB) return commonTagsB - commonTagsA;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white pb-32">
       {/* ===== Header (Simple Version for Blog) ===== */}
       <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-14 transition-all">
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
            <Link href="/blog" className="text-emerald-600 font-bold">ブログ一覧</Link>
            <Link href="/#contact" className="hover:text-emerald-600">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      <article className="pt-28 mx-auto max-w-4xl px-5">
        <div className="mb-10 text-center">
          <div className="flex justify-center flex-wrap gap-4 text-sm text-slate-500 mb-6 font-medium">
             <div className="flex items-center gap-1">
                <IconClock size={16} className="text-emerald-600" />
                {metadata.date}
              </div>
              <div className="flex items-center gap-1 font-bold">
                <IconUser size={16} className="text-emerald-600" />
                {metadata.author}
              </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
            {metadata.title}
          </h1>
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {metadata.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                <IconTag size={12} />
                {tag}
              </span>
            ))}
          </div>
          {metadata.eyecatch && (
            <div className="relative aspect-[3/2] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group">
              <Image
                src={metadata.eyecatch}
                alt={metadata.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}
        </div>

        {/* --- Post Content --- */}
        <div className="prose prose-slate max-w-none 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:pb-2 [&>h2]:border-b-2 [&>h2]:border-emerald-100 [&>h2]:text-slate-900
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-slate-800
          [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-4 [&>ul]:mb-6 [&>ul]:text-slate-700 [&>ul]:text-lg
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-4 [&>ol]:mb-6 [&>ol]:text-slate-700 [&>ol]:text-lg
          [&>blockquote]:border-l-4 [&>blockquote]:border-emerald-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-emerald-900 [&>blockquote]:bg-emerald-50 [&>blockquote]:py-4 [&>blockquote]:rounded-r-lg [&>blockquote]:mb-8
          [&>hr]:my-12 [&>hr]:border-slate-200
        ">
          <MDXRemote source={content} />
        </div>

        {/* RECOMMENDED SECTION */}
        <section className="mt-32 pt-16 border-t border-slate-100">
           <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">おすすめの記事</h2>
           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="group block h-full">
                  <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm transition-all group-hover:shadow-lg">
                    <Image
                      src={item.eyecatch || "/header-logo-dark.png"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="space-y-2">
                     <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 block">
                        {item.tags?.[0] || 'BLOG'}
                     </span>
                     <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {item.title}
                     </h3>
                     <div className="flex items-center gap-2 text-xs text-slate-400 font-medium pt-1">
                        <IconClock size={14} className="text-slate-300" />
                        {item.date}
                     </div>
                  </div>
                </Link>
              ))}
           </div>
        </section>

        <div className="mt-20 pt-10 border-t border-slate-100 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline transition-all">
            <IconChevronLeft size={20} />
            ブログ一覧に戻る
          </Link>
        </div>
      </article>

      <footer className="mt-24 bg-slate-50 py-12 text-center border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-slate-500 mb-4 font-bold text-emerald-700">VITAL WORKS ─ 働く人の健康と生産性を支援する</p>
          <nav className="flex justify-center gap-10 mb-8 text-sm">
            <Link href="/" className="text-slate-500 hover:text-emerald-600">トップ</Link>
            <Link href="/blog" className="text-emerald-600 font-bold">ブログ</Link>
            <Link href="/legal" className="text-slate-500 hover:text-emerald-600">プライバシーポリシー</Link>
          </nav>
          <p className="text-xs text-slate-400">© 2026 VITAL WORKS</p>
        </div>
      </footer>
    </main>
  );
}
