import { Route, Routes } from 'react-router-dom'
import './App.css'
import Front from './component/Front'
import React, {useEffect} from 'react'
import Notfound from './component/Notfound'

function App() {
  useEffect(() => {
    if ("ServiceWorker" in navigator) {
      window.addEventListener("load", ()=>{
        navigator.serviceWorker
        .register("sw.js")
        .then((registration)=>{
          console.log("sw register", registration);
        })
        .catch((registrationError)=>{
          console.log("sw registoin failed", registrationError);
        })
      })
    }
  }, [])
  return (
    <>
    <Routes>
      <Route path='/home'  element={<Front/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    {/* <Front/> */}
    </>
  )
}

export default App
