import { PostCard } from "../postCard"
import './style.css'
interface IPosts{
    posts?: any
}

export const Posts = ({posts}:IPosts) =>{
    return(
        <div className="posts">
            {posts.map((post:any) => {
            return(
                <PostCard key={post.id} id={post.id} title={post.title} body={post.body} photo={post.photo}/>
            )})}
            
        </div>
    )
}