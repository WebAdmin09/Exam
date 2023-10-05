import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FrontLayout from './components/layout/front'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import BlogsPage from './pages/BlogsPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import MyBlogsPage from './pages/user/MyBlogsPage'
import AccountPage from './pages/common/AccountPage'
import AdminLayout from './components/layout/admin'
import DashboardPage from './pages/dashboard'
import CategoriesPage from './pages/categories'
import UsersPage from './pages/users'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const { isAuthenticated, role } = useContext(AuthContext);

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
          <Route
            path="my-blogs"
            element={
              isAuthenticated ? <MyBlogsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="account"
            element={
              isAuthenticated ? <AccountPage /> : <Navigate to="/login" />
            }
          />
        </Route>
        {isAuthenticated && role === "admin" ? (
          <Route path="/" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        ) : null}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
