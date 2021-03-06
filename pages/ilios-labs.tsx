/* eslint-disable @next/next/no-img-element */
export default function IliosLabs() {
  return (
    <div className="divide-y-2 divide-gray-500 divide-opacity-60 px-5">
      <div className="p-4">
        <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 text-5xl pb-2">
          Ilios Labs
        </div>
        <div className="text-xl">
          Ilios Labs is a collection of pet projects that I have been working on
          for months. The idea behind them is to provide services that make
          people&apos;s lives easier, whether they&apos;re developers,
          designers, or just people who want convenient tools.
        </div>
      </div>
      <div className="md:space-x-4 space-y-2 md:space-y-0 pt-6 flex flex-col md:flex-row mb-8 md:mb-0">
        <div className="rounded-2xl border-4 text-center flex-col justify-center px-5 py-4">
          <div className="font-extrabold text-3xl text-monad">Monad</div>
          <div className="flex">
            The easiest way to share and discover code snippets of all the
            popular languages, built with SEO, security, and simplicity in mind.
            Keep your snippets public or unlisted to keep them safe.
          </div>
          <button className="px-5 py-4 flex mx-auto space-x-4">
            <a
              href="https://monad.ilioslabs.dev"
              className="flex border-2 border-starOrange text-starOrange font-bold rounded-md p-3 hover:bg-starOrange hover:text-white transition-all ease-in-out duration-300"
            >
              Check it out
            </a>
          </button>
          <img
            className="mx-auto rounded-full w-48 h-48 mt-10"
            alt="monad"
            src={"/monad.svg"}
          />
        </div>
        <div className="rounded-2xl border-4 text-center flex-col justify-center px-5 py-4">
          <div className="font-extrabold text-3xl text-bubble">Bubble</div>
          <div className="flex">
            An extremely minimalistic text editor that lets you write quick jots
            and notes when you need them most, and an added bonus of having text
            formatting.
          </div>
          <button className="px-5 py-4 flex mx-auto space-x-4">
            <a
              href="https://bubble.ilioslabs.dev"
              className="flex border-2 border-starOrange text-starOrange font-bold rounded-md p-3 hover:bg-starOrange hover:text-white transition-all ease-in-out duration-300"
            >
              Check it out
            </a>
          </button>
          <img
            className="mx-auto rounded-full w-48 h-48 mt-10"
            alt="toast"
            src={"/bubble.svg"}
          />
        </div>
      </div>
    </div>
  );
}
