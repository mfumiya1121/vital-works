"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  const [logoSrc, setLogoSrc] = useState("/header-logo.png");
  const [headerClass, setHeaderClass] = useState(
    "bg-white/10 backdrop-blur-sm text-white"
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setHeaderClass("bg-white shadow-sm text-slate-800 border-b border-slate-100");
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
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto max-w-6xl h-14 px-5 flex items-center justify-between pt-2">
        <Link href="/#top" className="flex items-center gap-3">
          <Image
            id="header-logo"
            src={logoSrc}
            alt="Vital Works"
            width={180}
            height={40}
            className="object-contain transition-opacity duration-300"
            priority
          />
        </Link>

        <nav className="hidden sm:flex gap-6 text-sm transition-colors duration-300">
          <Link href="/#team" className="hover:opacity-70">メンバー</Link>
          <Link href="/#services" className="hover:opacity-70">サービス</Link>
          <Link href="/#benefits" className="hover:opacity-70">メリット</Link>
          <Link href="/blog" className="hover:opacity-70">ブログ</Link>
          <Link href="/#contact" className="hover:opacity-70">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}
