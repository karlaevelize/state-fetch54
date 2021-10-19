import axios from "axios"
import { useEffect, useState } from "react"

export default function FetchAgain(){

  const [ quote, setQuote] = useState()
  const [ randomQuote, setRandomQuote ] = useState({})

  async function fetchData(){
    const response = await axios.get("https://api.quotable.io/quotes")
    // console.log("response", response)
    setQuote(response.data.results)
  }

  async function fetchRandomQuote(){
    const response = await axios.get("https://api.quotable.io/random")
    // console.log("quotes response", response)
    setRandomQuote(response.data)
  }

  useEffect(() => {
    fetchData()
    fetchRandomQuote()
  }, [])

  return(
    <div>
      <h2>Fetch again</h2>
      <h3>Random Quote</h3>
      {/* we don't map random quote */}
      {/* because it's an object, not array */}
      <p><b>{randomQuote.author}</b> {randomQuote.content}</p>
      <h3>List of Quotes</h3>
      {!quote 
        ? "Loading" 
        : quote.map(q => {
          return (
            <div key={q._id}>
              <p><b>{q.author}</b> {q.content}</p>
            </div>
          )
        })}
    </div>
  )
}