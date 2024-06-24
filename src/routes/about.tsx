import { ReactNode } from "react";
import { HeaderRoute } from "./header";
import { FooterRoute } from "./footer";

export function AboutRoute() {
  return (
    <div>
      <HeaderRoute />
      <main className="mx-64">
        <Introduction />
        <Photo />
        <AboutMe />
      </main>
      <FooterRoute />
    </div>
  );
}

function Introduction() {
  return (
    <div className="mt-20 flex flex-col justify-center space-y-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-7xl md:text-6xl">
          <span className="text-blue-100">About </span>
          <span className="text-blue-100">Ananda Marwan</span>
        </h1>
      </div>
      <div>
        <p className="text-slate-400 text-center">
          Short highlights how Ananda went with his life.
        </p>
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="m-10 flex justify-center">
      <img
        className="max-w-4xl rounded-lg"
        src="/images/photo-about.jpeg"
        alt="Photo of Ananda Marwan"
      />
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function AboutMe() {
  return (
    <div className="ml-24 text-left space-y-8">
      <Section title="About Me">
        <p>👋 Hi There! I’m Ananda. Happy to see you!</p>
        <p>
          🤝 Mostly goes by as an Educator, Financial Advisor and I’ve been
          doing this professionally since 2022.
        </p>
        <p>
          ❄︎ Now I’m currently learning full stack development at Bearmentor
          bootcamp.
        </p>
      </Section>

      <Section title="Main Work">
        <p>
          Currently I'm the founder of{" "}
          <a
            href="https://www.instagram.com/indopips"
            className="text-cyan-500 underline"
          >
            Indopips
          </a>
          .
        </p>
        <p>Indopips helps people learn and grow in the financial market.</p>
      </Section>

      <Section title="Past Work">
        <p>Previously, I was…</p>
        <p>
          Working as a research and development staff at{" "}
          <a
            href="https://www.maxco.co.id/"
            className="text-cyan-500 underline"
          >
            PT. Maxco Futures
          </a>
          .
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </section>
  );
}
