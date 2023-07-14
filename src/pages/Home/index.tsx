import { useState, useEffect, useCallback } from 'react';
import "./style.css"
import { loadData } from '../../utils/load-data';
import { Posts } from '../../components/posts';
import { InputSearch } from '../../components/inputsearch';
import { AddPostButton } from '../../components/addPostButton';
export default function Home() {
  
  const [postsandPhotos, setpostsandPhotos] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [allPosts, setAllPosts] = useState<any[]>([])
  const [postPerPage] = useState(50)
  const [input, setInput] = useState<any>()

  const getData = useCallback(async (page:any, postPerPage: any) => {
    const postsAndPhotos = await loadData()
    setAllPosts(postsAndPhotos)
    setpostsandPhotos(postsAndPhotos.slice(page, postPerPage))
  }, [])

  useEffect(()=>{
    getData(0, postPerPage);
    },[getData, postPerPage])
  

  const addPosts = ()=>{
    const nextPage = page + postPerPage
    const newPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    postsandPhotos.push( ...newPosts)
    setpostsandPhotos(postsandPhotos)
    setPage(nextPage)
  }

  const handleChange = (e:any)=>{
    setInput(e.target.value);
  }

    const iguais = !!input ?
    postsandPhotos.filter((post) => {
     return post.title.toLowerCase().includes(input.toLowerCase())
   })
    :postsandPhotos

    const canAddPosts = iguais.length < 100
    //alert(canAddPosts) 
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
      {!input && <AddPostButton click={addPosts} disabled={!canAddPosts} title='Add PostCard'/>}
    </div>
  );
}

