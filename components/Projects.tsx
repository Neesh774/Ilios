/* eslint-disable @next/next/no-img-element */
import Text from "./Text";
import { classNames, tagColor } from "../pages/blog/index";
import { RiGithubFill } from "react-icons/ri";
export default function Projects({ posts }) {
  posts = posts[0];
  return (
    <div>
      <div className="md:flex mx-auto md:space-x-4 justify-center lg:space-x-10 space-y-4 md:space-y-0">
        {posts.map((post, i) => (
          <a
            key={i}
            className=" rounded-2xl transition-all ease-in-out duration-300 border-black border-2 w-60 h-70 hover hover:border-starOrange hover:text-starOrange flex mx-auto md:mx-0"
            href={post.properties.Link.url}
          >
            <div className="py-5 overflow-y-hidden space-y-3">
              <div className="text-2xl font-bold">
                <Text text={post.properties.Name.title} />
              </div>
              <div className="text-md mx-2 text-black">
                {post.properties.Description.rich_text[0].plain_text}
              </div>
              <div className="flex justify-center text-black">
                <div
                  className={classNames(
                    "rounded-md",
                    tagColor(post.properties.Status.select.color)
                  )}
                >
                  <div className="px-2 py-1 text-xs">
                    {post.properties.Status.select.name}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {post.properties.Date.date.start}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center pt-3">
        <a
          className="px-3 py-2 items-center flex rounded-full border-2 border-starOrange hover:bg-starOrange text-starOrange hover:text-white transition-all ease-in-out duration-300 space-x-2 justify-center"
          href="https://github.com/Neesh774"
        >
          <RiGithubFill className="h-8 w-8 lg:h-7 lg:w-7" />
          <div className="lg:text-xl font-semibold">See more on Github</div>
        </a>
      </div>
    </div>
  );
}
