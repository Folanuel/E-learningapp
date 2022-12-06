import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
// import { Navbar } from "./components/Navbar";
import { Navbar2 } from "./components/Navbar2";
import { PageFooter } from "./components/Footer";
// import { Header } from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import {Profile} from "./pages/Profile";
import { About } from "./pages/About";
import Protected from "./components/Protected";
import {Payments} from "./pages/Payments";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AuthContextProvider>
    <Router>     
      <Navbar2 />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
      <PageFooter />
    </Router>
    </AuthContextProvider>
  );
}
