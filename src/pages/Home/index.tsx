import { useState, useEffect } from 'react';
import "./style.css"
import { loadData } from '../../utils/load-data';
import { Posts } from '../../components/posts';
import { InputSearch } from '../../components/inputsearch';
export default function Home() {
  
  const [postsandPhotos, setpostsandPhotos] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [allPosts, setAllPosts] = useState<any[]>([])
  const [postPerPage, setPostPerPage] = useState(2)
  const [input, setInput] = useState<any>()
  const [iguais, setIguais] = useState<any[]>([])

  const getData = async () => {
    const postsAndPhotos = await loadData()
    setAllPosts(postsAndPhotos)
    setpostsandPhotos(postsAndPhotos.slice(page, postPerPage))
  }

  useEffect(()=>{
    getData();
    },[])
  
  useEffect(()=>{
    setIguais(postsandPhotos)
  },[postsandPhotos])

  const addPosts = ()=>{
    let newPosts: any[] = []
    const nextPage = page + postPerPage
    newPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    const nextPosts = []
    nextPosts.push(...postsandPhotos, ...newPosts)
    setpostsandPhotos(nextPosts)
    setPage(nextPage)
  }

  const handleChange = (e:any)=>{
    setInput(e.target.value);
  }

  useEffect(()=>{
    const newPosts:any[] = !!input ?
    postsandPhotos.filter((post) => {
     return post.title.toLowerCase().includes(input.toLowerCase())
   })
    :postsandPhotos
    setIguais(newPosts)
    },[input])

  return (
    <div className='App'>
      <InputSearch value={input} placeholder='Buscar PostCard'  onChange={handleChange}></InputSearch>
      <div className='posts' >
      {
      iguais.map((post) => {
        return(
          <Posts post={post}/>
        )
      })}
      {(iguais.length === 0)&&(
        <div className='vazio'><h2>Não há nenhum Postcard com esse título</h2></div>
      )}
      </div>
      {!input && <button type="button" onClick={addPosts}>Adicionar posts</button>}
    </div>
  );
}

