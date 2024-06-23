export function App() {
  return (
    <div className="p-10">
      <header>
        <nav className="p-4 bg-slate-900 fixed w-full z-20 top-0 start-0 border-b">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl text-white hover:text-blue-300">
              🐼 Ananda Marwanaya Putra
            </a>
            <ul className="flex flex-row gap-10 text-sm text-white">
              <li>
                <a href="/" className="text-xl">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-xl">
                  About
                </a>
              </li>
              <li className="text-xl">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
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
          <br />
          <div className="space-y-4 flex justify-center mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="images/toys.jpeg"
                    alt="Toys"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/images/friends.jpeg"
                    alt="Friends"
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
                    src="/images/beach.jpeg"
                    alt="Beach"
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
                    src="/images/beach.jpeg"
                    alt="Beach"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/images/ananda-with-car.jpeg"
                    alt="Ananda with Car"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/images/boys.jpeg"
                    alt="Boys"
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
          </div>
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

        <div className="flex flex-row justify-center gap-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://contacts.anandamarwan.com/">
              <img
                className="rounded-t-lg"
                src="/images/contacts.png"
                alt="Contact"
              />
            </a>
            <div className="p-5">
              <a href="https://contacts.anandamarwan.com/">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Contacts
                </h1>
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                This Website made for people can control their contacts.
              </p>
              <a
                href="https://contacts.anandamarwan.com/"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://v2.daily-activity.anandamarwan.com/">
              <img
                className="rounded-t-lg"
                src="/images/daily-activity.png"
                alt="Daily Activity"
              />
            </a>
            <div className="p-5">
              <a href="https://v2.daily-activity.anandamarwan.com/">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Daily Activity
                </h1>
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Daily Activity app to help with your study or productivity:
              </p>
              <a
                href="https://v2.daily-activity.anandamarwan.com/"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 mt-10 space-y-4">
        <div className="flex justify-center">
          <h1 className="text-3xl text-white">My Links</h1>
        </div>
        <nav className="flex flex-col space-y-4">
          <ul className="flex flex-row justify-center gap-20 items-center">
            <li>
              <a href="https://github.com/anandamarwan/">
                <img
                  className="w-10 h-10"
                  src="/images/icon-github.svg"
                  alt="Github"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anandamarwan/">
                <img
                  className="w-10 h-10"
                  src="/images/icon-linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/anandamarwanayaputra/">
                <img
                  className="w-10 h-10"
                  src="/images/icon-instagram.svg"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/anandamarwan">
                <img
                  className="w-10 h-10"
                  src="/images/icon-telegram.svg"
                  alt="Telegram"
                />
              </a>
            </li>
          </ul>

          <div className="flex justify-center gap-4">
            <p className="text-slate-400">
              Copyright ©2024 Ananda Marwanaya Putra
            </p>

            <p className="text-slate-400">Made with ❤️</p>
          </div>
        </nav>
      </footer>
    </div>
  );
}
