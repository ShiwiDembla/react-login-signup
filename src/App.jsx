import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Logout from "./pages/Logout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Navbar /> {/* Assuming Navbar is your navigation component */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
