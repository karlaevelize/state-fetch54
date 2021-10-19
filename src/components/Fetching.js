import axios from "axios"
import { useEffect, useState } from "react"

export default function Fetching(){

  const [ counter, setCounter ] = useState(0)
  const [ articles, setArticles ] = useState([])

  console.log("articles", articles)

  // 1. Write an async function
  // 2. Make a request with axios
  // 3. Console.log what you get back
  // 4. Put the data in the state 
  async function fetchData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    console.log("response", response)
    setArticles(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      <h2>useEffect</h2>
      {counter} 
      <button 
        onClick={() => setCounter(counter + 1)}>
        +</button>
        <button onClick={() => setArticles([])}>Clear</button>
        {articles.map(art => {
          return(
            <div key={art.id}>
              <h3>{art.title}</h3>
              <p>{art.body}</p>
            </div>
          )
        })}
    </div>
  )
}