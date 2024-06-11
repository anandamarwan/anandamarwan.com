import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import myPhoto from "./assets/photo.jpeg";

export function App() {
  return (
    <body className="ml-10 mt-5 mr-10 bg-slate-900">
      <header className="">
        <div>
          <a href="/" className="text-xl text-white hover:text-blue-300">
            🐼 Ananda Marwanaya Putra
          </a>
        </div>
        <div className="flex justify-end">
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
                    src={github}
                    alt="github"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anandamarwan/">
                  <img
                    className="w-5 h-5 hover:bg-blue-300"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/anandamarwanayaputra/">
                  <img
                    className="w-5 h-5 hover:bg-blue-300"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </header>

      <main className="mt-4">
        <section className="m-20 flex flex-col text-center">
          <div>
            <h1 className="text-8xl">
              <span className="text-blue-100">Hi! I'm</span>
              <span className="text-blue-400">Ananda</span>
            </h1>
          </div>
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
              Github
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
          <picture className="mt-4 content-center">
            <img className="rounded w-96" src={myPhoto} alt="my photo" />
          </picture>
        </section>

        <div>
          <h1 className="text-3xl flex justify-center space-y-4">
            Full Stack Developer
          </h1>
        </div>

        <div className="rounded-md shadow-sm flex justify-center" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HTML
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            CSS
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            JavaScript
          </button>
        </div>
      </main>

      <footer></footer>
    </body>
  );
}
