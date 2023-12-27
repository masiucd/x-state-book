import {type PropsWithChildren} from "react";

export default function MarketingLayout({children}: PropsWithChildren) {
  return (
    <>
      <header className="flex min-h-16 bg-blue-400">
        <div className="mx-auto flex w-full max-w-4xl items-center border">
          <strong>X state stuff</strong>
        </div>
      </header>
      <main className="flex min-h-[calc(100dvh-8rem)] flex-col bg-black/10">
        {children}
      </main>
      <footer className="flex min-h-16 bg-green-400">
        <div className="mx-auto flex w-full max-w-4xl flex-1 items-center  border-2">
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
