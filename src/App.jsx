import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

const App = () => {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/p001" element={<Pizza />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
