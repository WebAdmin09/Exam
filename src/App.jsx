import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontLayout from './components/layout/front'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import BlogsPage from './pages/BlogsPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path='category' element={<CategoryPage />} />
          <Route path='blogs' element={<BlogsPage />} />
          <Route path='blog/:blogid' element={<BlogPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
