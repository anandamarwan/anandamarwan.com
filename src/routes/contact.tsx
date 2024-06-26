export function ContactRoute() {
  return (
    <>
      <Introduction />
      <SocialLinks />
    </>
  );
}

function Introduction() {
  return (
    <div className="mt-20 flex flex-col justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-7xl md:text-4xl">
          Contact and Socialize with{" "}
          <span className="text-cyan-400">Ananda</span>
        </h1>
        <h2 className="text-slate-400 text-xl text-center">
          How to best reach me? Check the adventurous buttons below.
        </h2>
      </div>
    </div>
  );
}

function SocialLinks() {
  const links = [
    {
      href: "https://github.com/anandamarwan",
      text: "GitHub",
      bg: "bg-stone-800",
      hover: "hover:bg-stone-500",
    },
    {
      href: "https://www.linkedin.com/in/anandamarwan/",
      text: "LinkedIn",
      bg: "bg-blue-700",
      hover: "hover:bg-blue-500",
    },
    {
      href: "https://www.instagram.com/anandamarwanayaputra/",
      text: "Instagram",
      bg: "bg-red-600",
      hover: "hover:bg-red-400",
    },
    {
      href: "https://t.me/anandamarwan",
      text: "Telegram",
      bg: "bg-cyan-600",
      hover: "hover:bg-cyan-400",
    },
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 px-14">
          <div className="max-w-3xl text-center p-10 rounded-lg bg-slate-800 space-y-4">
            <h1 className="text-4xl">Feeling adventurous?</h1>
            <h2 className="text-slate-400 text-xl text-center">
              Let's continue on Instagram or LinkedIn or Telegram
            </h2>
            <div>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`focus:outline-none text-white ${link.bg} ${link.hover} focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
