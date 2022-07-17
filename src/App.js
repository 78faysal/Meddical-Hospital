import logo from './logo.svg';
import './App.css';
import Home from '../src/Components/Home/home';
import Navbar from '../src/Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../src/Components/Not Found/NotFound';
import Footer from '../src/Components/Footer/footer';
import Contact from '../src/Components/Contact Us/Contact';
import Services from '../src/Components/Services/services';
import Testimonials from '../src/Components/Testimonials/Testimonials';
import Faq from '../src/Components/FAQ/Faq';
import Login from '../src/Components/LogIn/Login';
import About from '../src/Components/About Us/About';
import ServiceDetails from '../src/Components/Service/ServiceDetails/ServiceDetails';
import useFirebase from '../src/Hooks/useFirebase';


function App() {

  const {user } = useFirebase();

  return (
    <div className="">
      <Router>
          <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/services" element={user.email? <Services/> : <Login/>} />

          <Route path="/serviceDetails/:serviceId" element={user.email? <ServiceDetails/> :<Login/>}/>

          <Route path="/testimonials" element={<Testimonials/>} />

          <Route path="/faq" element={<Faq/>} />

          <Route path="/login"  element={<Login/>} />

          <Route path="/about" element={<About/>} />


          <Route path="*" element={<NotFound/>} />
        </Routes>
          <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
