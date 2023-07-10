import React, { useState, useEffect } from 'react';
import "./App.css"
export default function App() {

  const data = [
    {
      id: 1,
      title: 'O titulo 1',
      body: 'o corpo 1' 
    },
    {
      id: 2,
      title: 'O titulo 2',
      body: 'o corpo 2' 
    },
    {
      id: 3,
      title: 'O titulo 3',
      body: 'o corpo 3' 
    },
  ]

  
  const [photos, setPhotos] = useState<any[]>()
  const [posts, setPosts] = useState<any[]>([])
  
  async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
    const resul = response.json()
    const resulPhotos = photosResponse.json()
    setPosts( await resul)
    setPhotos(await resulPhotos)
    console.log(resulPhotos);
    
    const postsAndPhotos = posts.map((post, index)=>{
      
      return {...post, photo: photos![index].url}
    })
    setPosts(postsAndPhotos)
  }
  useEffect(()=>{
    getData()
    }, [])
    

  return (
    <div className='App'>
      <div className='posts'>
      {posts.map((post) => {
        return(
          <div className='post'>
            <img src={post.photo} alt={post.title} />
            <div key={post.id} className='post-content'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

