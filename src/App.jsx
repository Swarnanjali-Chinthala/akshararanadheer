import { BrowserRouter,Routes,Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import MutualFunds from "./pages/MutualFunds";
import SIPCompounding from "./pages/SIPCompounding";
import InvestmentTools from "./pages/InvestmentTools";
import About from "./pages/About";
import Contact from "./pages/Contact";

import WhatsAppButton from "./components/buttons/WhatsAppButton";
import CallButton from "./components/buttons/CallButton";

function App(){

  return(

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/mutualfunds" element={<MutualFunds/>}/>
        <Route path="/sip" element={<SIPCompounding/>}/>
        <Route path="/tools" element={<InvestmentTools/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>

      <Footer/>

      <WhatsAppButton/>
      <CallButton/>

    </BrowserRouter>

  );
}

export default App;