
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/new" element={<PrivateRoute><PostForm /></PrivateRoute>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
