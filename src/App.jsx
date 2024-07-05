import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './Pages/about'
import Home from './Pages/home'
import Team from './Pages/team'
import Navbarpag from './Layouts/navbar'
import Elementos from './Pages/elementos'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Navbarpag />}>
              <Route path='about' element={ <About /> } />
              <Route index element={ <Home /> } />
              <Route path='dev_team' element={ <Team /> } />
              <Route path='elementos' element={ <Elementos /> } />

              <Route path='*' element={ <Navigate replace to="/" /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
