import { useState } from 'react'
import Home from "./pages/home.jsx"
import Auth from "./pages/auth.jsx"
import Profilepage from './pages/profilepage.jsx'
import MainJobPage from './pages/mainJobPage.jsx'
import NotFound from './component/NotFound.jsx'
import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/searchPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/profile/:id" element={<Profilepage/>} />
        <Route path="/job/:id" element={<MainJobPage/>} />
        <Route path="*" element={<NotFound/>} />
        { /*<Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
         */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
