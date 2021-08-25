/* eslint-disable @next/next/no-img-element */
import Text from './Text'
export default function Projects({posts}){
    posts = posts[0];
    return (
        <div className="mx-10 grid-cols-5 grid grid-flow-row">
            {posts.map((post) => (
                <div className="rounded-md m-2 transition-all ease-in-out duration-100 border-black border-2 w-40 h-40" key={post.id}>
                    <img src={post.properties.Photo.files[0].file? post.properties.Photo.files[0].file.url : post.properties.Photo.files[0].external.url} alt="project image" className="w-10 h-10"/>
                    <div>
                        <div className="text-3xl">
                            <Text text={post.properties.Name.title}/>
                        </div>
                        <div className="text-md mx-2">
                            {post.properties.Description.rich_text[0].plain_text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}