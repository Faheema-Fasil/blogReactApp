import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Posts  from "./componets/Posts";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
   <Posts/>
   <Footer/>
    </>
  )
}

export default App
