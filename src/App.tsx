import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import About from "./components/register/About"
import Contact from "./components/register/Contact"
import NotFound from "./components/register/NotFound"
import EditProfile from "./components/profile/Edit_Profile"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:editProfile" element={<EditProfile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
