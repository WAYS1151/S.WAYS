import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Upload from './pages/Upload'
import MyMusic from './pages/MyMusic'
import Login from './pages/Login'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/me" element={<MyMusic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}