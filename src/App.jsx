import { useState } from 'react'
import './App.css'
import Startgame from './component/Startgame'
import PlayGame from './component/PlayGame';



function App() {
  
  const [isGameStart,setIsGameStart] = useState(false);

  const toggleGamePlay=()=>{
    setIsGameStart(pre => !pre)
  }

  return (
    <>
     { isGameStart ? <PlayGame/> : <Startgame toggle= {toggleGamePlay} /> }
    </>
  )
}

export default App
