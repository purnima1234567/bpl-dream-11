
import { Suspense, useState } from 'react'
import './App.css'
import Bannar from './components/homepage/bannar/Bannar'
import Players from './components/homepage/players/Players'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'


const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}


function App() {
  const playerPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000);


  return (
    <>
    
    <Navbar coin={coin} />   
    <Bannar /> 
      
    <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
    </Suspense>


   {/* react toastify */}
    <ToastContainer />
    </>


  )
}

export default App
