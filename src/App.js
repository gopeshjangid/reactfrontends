import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AccountSetting from './pages/AccountSetting';
import Author from './pages/Author'; 
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Forgot from './pages/Forgot';
import HowItwork from './pages/HowItwork';
import Login from './pages/Login';
import Order from './pages/Order';
import Prices from './pages/Prices';
import Privacy from './pages/Privacy';
import Register from './pages/Register';
import Review from './pages/Review';
import Sample from './pages/Sample';
import Services from './pages/Services';
import Terms from './pages/Terms';
import AddTocart from './pages/AddTocart';
import ViewDetails from './pages/ViewDetails';



function App() {
  return(
    
     <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/AccountSetting" element={<AccountSetting />}/>
      <Route path="/Author" element={<Author />}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/Career" element={<Career />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Faq" element={<Faq />}/>
      <Route path="/Forgot" element={<Forgot />}/>
      <Route path="/HowItwork" element={<HowItwork />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Order" element={<Order />}/>
      <Route path="/Prices" element={<Prices />}/>
      <Route path="/Privacy" element={<Privacy />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Review" element={<Review />}/>
      <Route path="/Sample" element={<Sample />}/>
      <Route path="/Services" element={<Services />}/>
      <Route path="/Terms" element={<Terms />}/>
      <Route path="/AddTocart" element={<AddTocart />}/>
      <Route path="/ViewDetails" element={<ViewDetails />}/>
  
     
  </Routes>
  <Footer/>
  </BrowserRouter>


  );     
    
   
   
}

export default App;
