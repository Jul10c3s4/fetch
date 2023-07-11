export const loadData = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
    const resul = response.json()
    const resulPhotos = photosResponse.json()
    let posts = []
    posts = await resul;
    let photos: never[] = [];
    photos = await resulPhotos
    console.log(resulPhotos);
    
    const postsAndPhotos = posts.map((post:any, index:number)=>{
      return {...post, photo: photos[index]['url'] }
    })
    return postsAndPhotos
}