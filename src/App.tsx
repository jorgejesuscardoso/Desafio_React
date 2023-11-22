import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import NotFound from "./components/notFound/NotFound"
import EditProfile from "./components/profile/Edit_Profile"
import LayOut from "./components/layout/LayOut"
import './Styles.css'


function App() {

  return (
    <Routes>
      <Route  element={ <LayOut /> } >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:editProfile" element={<EditProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
