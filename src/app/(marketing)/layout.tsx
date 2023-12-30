import Link from "next/link";
import {type PropsWithChildren} from "react";

export default function MarketingLayout({children}: PropsWithChildren) {
  return (
    <>
      <header className="flex min-h-16">
        <div className="mx-auto flex w-full max-w-4xl items-center ">
          <Link href="/">
            <strong>X state stuff</strong>
          </Link>
        </div>
      </header>
      <main className="flex min-h-[calc(100dvh-8rem)] flex-col">
        {children}
      </main>
      <footer className="flex min-h-16">
        <div className="mx-auto flex w-full max-w-4xl flex-1 items-center">
          <small>
            X state stuff, by{" "}
            <a
              href="https://twitter.com/masiucd"
              target="_blank"
              rel="noopener noreferrer"
            >
              @masiucd
            </a>
          </small>
        </div>
      </footer>
    </>
  );
}
