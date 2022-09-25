import {
  DiscordActionRow,
  DiscordAttachments,
  DiscordButton,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";
import { hasProp, type NextkitError } from "nextkit";
import Favicon from "../../public/Favicon.png";
import { Data } from "use-lanyard";
import { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { SiGithub, SiTwitter } from "react-icons/si";
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
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const containerRef = useRef<HTMLDiscordMessagesElement>(null);
  const ilios = {
    author: activity?.discord_user.username ?? "Ilios",
    avatar: Favicon.src,
    bot: true,
  };

  const onSubmit = () => {
    if (name == "") {
      setName(value);
      setValue("");
      setTimeout(() => updateScroll(), 200);
      return;
    }
    if (email == "") {
      setEmail(value);
      setValue("");
      setTimeout(() => updateScroll(), 200);
      return;
    }
    if (message == "") {
      setMessage(value);
      setValue("");
      setTimeout(() => updateScroll(), 200);
      const promise = fetcher("/api/contact", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, body: value }),
        method: "POST",
      }).catch(() => null);
    }
  };

  const updateScroll = () => {
    // scroll down to bottom of messages
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return (
    <div className="lg:w-3/5 mx-2 lg:mx-auto relative" id="contact">
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
      <div className="scroller bg-[#36393e] border-white/5 border">
        <DiscordMessages
          className="h-96 overflow-y-auto mb-16 !border-none"
          ref={containerRef}
        >
          <DiscordMessage {...ilios}>
            Hi there! I'm Ilios, the bot that powers this website. I'm here to
            help you get in touch with my creator. To start off, what's your
            name?
          </DiscordMessage>
          {name && (
            <>
              <DiscordMessage author={name} avatar="blue">
                {name}
              </DiscordMessage>
              <DiscordMessage {...ilios}>
                Nice to meet you, {name}! In case Neesh wants to get back to
                you, what's your email?
              </DiscordMessage>
            </>
          )}
          {email && (
            <>
              <DiscordMessage author={name} avatar="blue">
                {email}
              </DiscordMessage>
              <DiscordMessage {...ilios}>
                Awesome! Now, what's your message?
              </DiscordMessage>
            </>
          )}
          {message && (
            <>
              <DiscordMessage author={name} avatar="blue">
                {message}
              </DiscordMessage>
              <DiscordMessage {...ilios}>
                Thanks for the message, {name}! I'll pass it on to my creator :D
                In the meantime, check out these cool links!
                <DiscordAttachments slot="components">
                  <DiscordActionRow>
                    <DiscordButton url="https://twitter.com/Neesh774">
                      <div className="flex flex-row gap-2 items-center">
                        <SiTwitter /> Twitter
                      </div>
                    </DiscordButton>
                    <DiscordButton url="https://github.com/Neesh774">
                      <div className="flex flex-row gap-2 items-center">
                        <SiGithub /> Github
                      </div>
                    </DiscordButton>
                  </DiscordActionRow>
                </DiscordAttachments>
              </DiscordMessage>
            </>
          )}
          <div className="anchor" />
        </DiscordMessages>
        <div className="absolute bottom-0 left-0 right-0 font-discord h-16">
          <form
            className={`mx-2 flex flex-row gap-2 items-center overflow-hidden relative ${
              name.length > 0 && message.length > 0 ? "cursor-not-allowed" : ""
            }`}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <textarea
              className={`discord-input resize-none w-full pl-4 pr-12 py-2 rounded-lg bg-text-900 bg-[#383C42] text-[#D5D6D7] placeholder-[#676B72] my-4 focus:outline-none ${
                name.length > 0 && message.length > 0
                  ? "cursor-not-allowed"
                  : ""
              }`}
              placeholder={
                name.length > 0 && message.length > 0
                  ? "You do not have permission to send messages in this channel. "
                  : "Message #ilios"
              }
              value={value}
              rows={1}
              disabled={name.length > 0 && message.length > 0}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                // enter submits form if not shift+enter
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.stopPropagation();
                  onSubmit();
                }
              }}
            />
            <button
              type="submit"
              className={`gap-2 absolute right-2 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-[#4E5AF0] hover:bg-[#3E48BC] transition-all duration-100 text-text-100 ${
                value != "" ? "translate-x-0" : "translate-x-20"
              }`}
            >
              <BiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
