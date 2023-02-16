import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Navbar from "./Navbar"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Signup from "./pages/Signup/Signup";
import Animals from "./pages/Animals/Animals";

function App() {
    return (
        <>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/animals" element={<Animals />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
        </>
    )
}

export default App