import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import "./App.css";
import Navbar from "./componant/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Footer from "./componant/Footer";
import AboutUs from "./pages/AboutUs";
import CourseDetails from "./pages/courseDetails";
import { ToastContainer } from "react-toastify";
import GoogleLogin from "./pages/GoogleLogin";
import {  GoogleOAuthProvider } from "@react-oauth/google";


function App() {

  const GoogleAuthwrapper = () =>{
    return(
      <GoogleOAuthProvider clientId="209359057568-rr6ffte1v3l5ifkthic1no8pnlq5j5cr.apps.googleusercontent.com"
>
        <GoogleLogin/>
      </GoogleOAuthProvider>
    )

  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<GoogleAuthwrapper/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/courseDetailsOverview/:courseId" element={<CourseDetails />} />
      </Routes>
      <ToastContainer/>
      <Footer />
    </>
  );
}

export default App;
