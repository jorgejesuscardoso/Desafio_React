import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />{/* 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
