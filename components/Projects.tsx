/* eslint-disable @next/next/no-img-element */
import Text from './Text'
import {classNames, tagColor} from '../pages/blog/index'
export default function Projects({posts}){
    posts = posts[0];
    return (
        <div className="mx-10 md:flex">
            {posts.map((post) => (
                <a className="rounded-md m-2 mx-auto transition-all ease-in-out duration-100 border-black border-2 w-60 h-70 hover:border-starOrange block" key={post.id} href={post.properties.Link.url}>
                    {/* <img src={post.properties.Photo.files[0].file? post.properties.Photo.files[0].file.url : post.properties.Photo.files[0].external.url} alt="project image" className="w-10 h-10"/> */}
                    <div className="py-5 overflow-y-hidden space-y-3">
                        <div className="text-3xl">
                            <Text text={post.properties.Name.title}/>
                        </div>
                        <div className="text-md mx-2">
                            {post.properties.Description.rich_text[0].plain_text}
                        </div>
                        <div className="flex justify-center">
                            <div className={
                                classNames(
                                    'rounded-md',
                                    tagColor(post.properties.Status.select.color)
                                )}>
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
    )
}