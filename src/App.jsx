import { useState } from 'react'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />}> </Route>
      <Route path='/login' element={<Login />}> </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
