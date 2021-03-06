import { getDatabase } from "../../lib/notion";
import Text from "../../components/Text";
import ReactTimeAgo from "react-time-ago";
import { parseISO } from "date-fns";
import MetaTags from "../../components/MetaTags";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function tagColor(text) {
  if (text == "red") return "bg-notionred";
  else if (text == "orange") return "bg-notionorange";
  else if (text == "yellow") return "bg-notionyellow";
  else if (text == "green") return "bg-notiongreen";
  else if (text == "blue") return "bg-notionblue";
  else if (text == "purple") return "bg-notionpurple";
  else if (text == "pink") return "bg-notionpink";
  else if (text == "brown") return "bg-notionbrown";
  else if (text == "gray") return "bg-notiongray";
  else return "notiondefault";
}

export default function Blog({ posts }) {
  return (
    <>
      <MetaTags title="Ilios Blog"/>
      <div className="divide-y-2 divide-gray-500 divide-opacity-60 px-5">
        <div className="p-4">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 text-5xl pb-2">
            The Blog
          </div>
          <div className="text-xl">
            Here&apos;s where I&apos;ll write down my thoughts on life,
            technology, and everything else.
          </div>
        </div>
        <div className="">
          {posts.map((post) => (
            <a
              href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
              key={post.id}
            >
              <div className="rounded-md drop-shadow-lg border-2 border-gray-400 hover:border-starOrange my-4 transition-all ease-in-out duration-10">
                <div className="text-xl m-2 flex items-center">
                  <Text text={post.properties.Name.title} />
                  <div className="text-sm text-gray-500">
                    &nbsp;•&nbsp;Created&nbsp;
                    <ReactTimeAgo
                      date={parseISO(post.properties.Created.created_time)}
                      locale="en"
                    />
                  </div>
                </div>
                <div className="flex space-x-2 m-2">
                  {post.properties.Tags.multi_select.map((tag) => (
                    <div key={tag.id}>
                      <div
                        className={classNames(
                          "rounded-md",
                          tagColor(tag.color)
                        )}
                      >
                        <div className="px-2 py-1 text-xs">{tag.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-2 text-sm pb-2 truncate">
                  <Text text={post.properties.Description.rich_text} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_BLOG_ID);
  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
