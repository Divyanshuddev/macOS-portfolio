import { useEffect, useState } from "react"
import Loader from "./components/Loader/Loader"
import MacOS from "./components/MacOS/MacOS"

function App() {
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[loading])
  return (
    <>
      {
        loading?(
          <Loader />
        ):(
          <MacOS />
        )
      }
    </>
  )
}

export default App
