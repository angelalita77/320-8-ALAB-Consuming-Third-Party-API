import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Films from './pages/Films'
import People from './pages/People'
import Starships from './pages/Starships'
import Planets from './pages/Planets'

function App() {
  //setup our routes & route components
  // create 3 page components to user with the routes
  //  // people, starships, planets
  // Create a nav bar to navigate between pages

  return (
    <>
     <Routes>
      <Route path='/people' element={<People />}></Route>
      <Route path='/ships' elements={<Starships />}></Route>
      <Route path='/planets' elements={<Planets  />}></Route>
     </Routes>
    </>
  )
}

export default App
