import { getDatabase }from '../../lib/notion'
import Text from '../../components/Text'
import ReactTimeAgo from 'react-time-ago'

export default function Blog({posts}) {
    return (
        <div className="divide-y-2 divide-gray-500 divide-opacity-60 px-5">
            <div className="p-4">
                <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 text-5xl pb-2">
                    The Blog
                </div>
                <div className="text-xl">
                    Here&apos;s where I&apos;ll write down my thoughts on life, technology, and everything else.
                </div>
            </div>
            <div className="">
                {posts.map((post) => (
                    <a href={`/blog/${post.id}`} key={post.id}>
                        <div className="rounded-md drop-shadow-lg border-2 border-gray-400 hover:border-starOrange my-4 transition-all ease-in-out duration-10">
                            <div className="text-xl m-2 flex items-center">
                                <Text text={post.properties.Name.title} />
                                <div className="text-sm text-gray-500">
                                    &nbsp;•&nbsp;Created&nbsp;<ReactTimeAgo date={post.properties.Created.created_time} locale="en" />
                                </div>
                            </div>
                            <div className="mx-2 text-sm pb-2 truncate">
                                <Text text={post.properties.Description.rich_text} />
                            </div>
                        </div>
                    </a>
                ))}
            </div> 
        </div>
    )
}
export const getStaticProps = async () => {
    const database = await getDatabase(process.env.NOTION_DATABASE_ID);
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