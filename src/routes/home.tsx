export function HomeRoute() {
  return (
    <>
      <Introduction />
      <Photo />
      <Skills />
      <Portfolio />
    </>
  );
}

function Introduction() {
  return (
    <section className="m-20 flex flex-col items-center">
      <header className="max-w-2xl">
        <h1 className="text-6xl sm:text-7xl md:text-8xl text-center">
          <span className="text-blue-900 dark:text-blue-100">Hi! I'm </span>
          <span className="text-blue-400">Ananda</span>
        </h1>
      </header>

      <div className="mt-5 max-w-2xl">
        <p className="text-xl text-slate-400 text-center">
          I’m a financial consultant with 3 years of experience in the capital
          markets and I'm currently learning full stack development at
          Bearmentor bootcamp.
        </p>
      </div>

      <div className="mt-5">
        <SocialLinks />
      </div>
    </section>
  );
}

function Photo() {
  return (
    <div className="m-10 flex justify-center">
      <img
        className="w-full max-w-4xl rounded-lg"
        src="/images/photo-about.jpeg"
        alt="Photo of Ananda Marwan"
      />
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
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`focus:outline-none text-white ${link.bg} ${link.hover} focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900`}
        >
          {link.text}
        </a>
      ))}
    </>
  );
}

type Skill = {
  imageURL: string;
  name: string;
};

function Skills() {
  const skills: Skill[] = [
    { imageURL: "/images/html.svg", name: "HTML" },
    { imageURL: "/images/css.svg", name: "CSS" },
    { imageURL: "/images/javascript.svg", name: "JavaScript" },
    { imageURL: "/images/typescript.svg", name: "TypeScript" },
    { imageURL: "/images/react.svg", name: "React" },
  ];

  return (
    <div className="space-y-10 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center">Technical Skills</h1>

      <ul className="flex flex-wrap flex-row gap-20 justify-center">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="flex flex-col items-center gap-4">
              <img
                src={skill.imageURL}
                alt={skill.name}
                className="w-20 h-20"
              />
              <h4 className="text-2xl">{skill.name}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Portfolio() {
  const projects = [
    {
      href: "https://contacts.anandamarwan.com/",
      src: "/images/contacts.png",
      title: "Contacts",
      description: "This Website made for people can control their contacts.",
    },
    {
      href: "https://daily-activity.anandamarwan.com/",
      src: "/images/daily-activity.png",
      title: "Daily Activity",
      description:
        "Daily Activity app to help with your study or productivity.",
    },
  ];

  return (
    <div className="space-y-10 mt-10 flex flex-col justify-center">
      <h1 className="text-3xl font-bold flex justify-center">
        Portfolio of Apps
      </h1>
      <div className="flex flex-row justify-center gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={project.href}>
              <img
                className="rounded-t-lg"
                src={project.src}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.href}>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h1>
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.href}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
