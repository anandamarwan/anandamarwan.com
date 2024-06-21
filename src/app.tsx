export function App() {
  return (
    <div className="p-10">
      <header className="flex justify-between items-center">
        <section>
          <a href="/" className="text-xl text-white hover:text-blue-300">
            🐼 Ananda Marwanaya Putra
          </a>
        </section>
        <nav className="flex justify-end">
          <ul className="flex flex-row gap-10 text-sm text-white">
            <li>
              <a href=""></a>About
            </li>
            <li>Contact</li>
            <div className="flex flex-row gap-4">
              <li>
                <a href="https://github.com/anandamarwan">
                  <img
                    className="w-5 h-5 hover:bg-blue-300"
                    src="/images/github.svg"
                    alt="GitHub"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anandamarwan/">
                  <img
                    className="w-5 h-5 hover:bg-blue-300"
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/anandamarwanayaputra/">
                  <img
                    className="w-5 h-5 hover:bg-blue-300"
                    src="/images/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <main className="mt-4">
        <section className="m-20 flex flex-col text-center">
          <header>
            <h1 className="text-6xl sm:text-7xl md:text-8xl">
              <span className="text-blue-100">Hi! I'm </span>
              <span className="text-blue-400">Ananda</span>
            </h1>
          </header>

          <div className="mt-5">
            <p className="text-xl text-slate-400">
              I’m a financial consultant who has 3 years of experience in the
              capital markets and i'm currently learning full stack developer at
              Bearmentor bootcamp.
            </p>
          </div>
          <div className="mt-5">
            <a
              href="https://github.com/anandamarwan"
              className="focus:outline-none text-white bg-stone-800 hover:bg-stone-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anandamarwan/"
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/anandamarwanayaputra/"
              className="focus:outline-none text-white bg-red-600 hover:bg-red-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Instagram
            </a>
          </div>
          <picture className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/images/anandamarwan.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </picture>
        </section>

        <div className="space-y-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold flex justify-center">
            Technical Skills
          </h1>

          <div className="flex flex-row gap-20 justify-center">
            <img
              className="w-40 h-40 bg-slate-400"
              src="/images/html.svg"
              alt="HTML"
            />

            <img
              className="w-40 h-40  bg-slate-400"
              src="/images/css.svg"
              alt="CSS"
            />

            <img
              className="w-40 h-40 bg-slate-400"
              src="/images/javascript1.svg"
              alt="JavaScript1"
            />

            <img
              className="w-40 h-40 bg-slate-400"
              src="/images/typescript.svg"
              alt="TypeScript"
            />

            <img
              className="w-40 h-40 bg-slate-400"
              src="/images/react.svg"
              alt="React"
            />
          </div>
        </div>

        <div className="flex justify-center p-10">
          <h1 className="text-3xl font-bold">Portfolio of Apps</h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
