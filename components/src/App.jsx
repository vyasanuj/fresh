
import { useContext } from "react"
import usesearch from "./custom_hook/usesearch"
import Appcontext from "./context/Context"



function App() {
  usesearch ()
const data = useContext(Appcontext)
  return (
    <>
         <h1>hii {data}</h1>
    </>
  )
}

export default App
