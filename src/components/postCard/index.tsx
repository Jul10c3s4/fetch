interface IPostCard{
    id: number,
    title: string,
    body: string,
    photo: string,
}
export const PostCard = ({ id, title, body, photo}:IPostCard)=>{
    return(
        <div className='post'>
            <img src={photo} alt={title} />
            <div className='post-content'>
            <h1>{id}</h1>
             <h2>{title}</h2>
             <p>{body}</p>
            </div>
        </div>
    )
}