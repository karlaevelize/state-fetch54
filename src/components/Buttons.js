import { useState } from "react"

export default function State(){

  const [ counter, setCounter ] = useState(0)
  const [ like, setLike ] = useState(false)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const toggleLike = () => {
    setLike(!like)
  }

  return(
    <div>
      <h3>useState</h3>
      <button onClick={toggleLike}>{like ? "liked" : "click to like"}</button>
     <p><button onClick={decrement}>-</button> {counter} <button onClick={increment}>+</button></p>
     <p></p>
    </div>
  )
}