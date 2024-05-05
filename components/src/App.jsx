// import { useState } from 'react'
import { useContext } from "react"
import usesearch from "./custom_hook/usesearch"
import Appcontext from "./context/Context"



function App() {
  // const [count, setCount] = useState(0)

  usesearch ()
const data = useContext(Appcontext)
  return (
    <>
         <h1>hii {data}</h1>
    </>
  )
}

export default App
