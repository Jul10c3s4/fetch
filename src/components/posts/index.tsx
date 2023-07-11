import { PostCard } from "../postCard"

interface IPosts{
    post: any
}

export const Posts = ({post}:IPosts) =>{
    return(
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} photo={post.photo}/>
    )
}