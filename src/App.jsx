import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import People from './pages/People'
import Starships from './pages/Starships'
import Planets from './pages/Planets'

//Import components
import NavBar from './components/NavBar'

function App() {
  //setup our routes & route components
  // create 3 page components to user with the routes
  //  // people, starships, planets
  // Create a nav bar to navigate between pages

  return (
    <>
      <main className='App'>
        <NavBar />

        <Routes>
            <Route path='/' element={<People />}></Route>
            <Route path='/ships' element={<Starships />}></Route>
            <Route path='/planets' element={<Planets />}></Route>
        </Routes>


      </main>
    </>
  )
}

export default App
