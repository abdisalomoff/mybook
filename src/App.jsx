import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import BookBySingle from './pages/BookBySingle/BookBySingle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/blog" element={<Blog />} />
      <Route path='/book/:id' element={<BookBySingle/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
