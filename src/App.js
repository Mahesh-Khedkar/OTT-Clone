import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Movie Website/Home'
// import Tvshow from './Movie Website/Tvshow'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/tvshow' element={<Tvshow/>}/> */}
    <Route path='*' element={<h1>404 Error</h1>}/>
    </Routes>
    </BrowserRouter>
     </div>
  )
}

export default App
