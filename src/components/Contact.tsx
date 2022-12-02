import { useRouter } from "next/router";
import { hasProp, type NextkitError } from "nextkit";
import { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import { Data } from "use-lanyard";
import Button from "./Button";

export class FetcherError extends Error implements NextkitError {
  constructor(public readonly code: number, message: string) {
    super(message);
  }
}

export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  const json = (await response.json()) as unknown;

  if (response.status >= 400) {
    let message = "Something went wrong";

    if (hasProp(json, "message") && typeof json.message === "string") {
      message = json.message;
    }

    throw new FetcherError(response.status, message);
  }

  return json as T;
}

const Contact = ({ activity }: { activity: Data | undefined }) => {
  const [text, setText] = useState("Send");
  return (
    <div className="md:w-3/5 mx-auto" id="contact">
      <div className="flex flex-col mb-4 gap-2">
        <h1 className="text-text-100 flex flex-row gap-1 text-3xl">
          <a href="#contact" className="text-highlight">
            #
          </a>
          <span className="font-bold">Send me a message!</span>
        </h1>
        <h3 className="text-text-500 flex flex-row gap-1 text-xl font-semibold">
          I'd love to hear from you!
        </h3>
      </div>
      <form
        className="space-y-2 flex flex-col gap-2"
        action="/api/form"
        autoComplete="off"
        method="POST"
        onSubmit={async (event) => {
          event.preventDefault();

          const values = Object.fromEntries(
            (new FormData(event.target as HTMLFormElement) as any).entries()
          );

          const promise = fetcher("/api/contact", {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
            method: "POST",
          });

          setText("Sending...");

          try {
            await promise;
            setText("Sent!");
          } catch (error) {
            setText("Something went wrong :(");
            console.log(error);
          }
          setTimeout(() => setText("Send"), 3000);
        }}
      >
        <div className="flex gap-1 flex-col">
          <span className="select-none text-xs font-semibold uppercase tracking-wide text-highlight">
            Email Address
          </span>
          <label htmlFor="email" className="w-4/5 md:w-2/5">
            <input
              required
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md text-text-300 bg-background-700 autofill:!bg-background-700 py-1 px-4 focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-400"
            />
          </label>
        </div>
        <div className="flex gap-1 flex-col">
          <span className="select-none text-xs font-semibold uppercase tracking-wide text-highlight">
            Your message
          </span>
          <label htmlFor="body">
            <textarea
              rows={5}
              name="body"
              minLength={10}
              maxLength={500}
              id="body"
              className="block w-full resize-none text-text-300 rounded-md bg-background-700 py-1 px-4 focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-400"
            />
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-2 mt-4 items-start md:items-center justify-between">
          <Button>{text}</Button>
          {activity && (
            <a
              href={`https://discord.com/users/${
                process.env.NEXT_PUBLIC_DISCORD_ID as string
              }`}
              className="border-b-2 border-spacing-0 border-text-300 text-text-400 pb-1 hover:border-[#4E5AF0] hover:text-text-100 transition-all duration-500 group"
            >
              <span className="flex flex-row font-mono text-xs md:text-sm items-center">
                I'm currently
                <div className="flex flex-row gap-2 items-center px-2 py-0.5 bg-[#36393D] rounded-full mx-2 group-hover:bg-[#4E5AF0]transition-all duration-100">
                  <img
                    src={`/${activity?.discord_status}.png`}
                    className="w-3 h-3"
                  />
                  {activity?.discord_status}
                </div>
                on Discord
              </span>
            </a>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
