
import './App.css';
import Footer from './components/FooterComponent/Footer';
import Front from './components/Front/Front';
import Navbar from './components/Navbar/Navbar';
import Ourfeatures from './components/OurFeatures/Ourfeatures';
import Pricing from './components/Pricing/Pricing';
import Remainder from './components/Remainder/Remainder';
import SeamlessScheduling from './components/SeamlessScheduling/SeamlessScheduling';
import SmartRemainderTask from './components/SmartRemainderTask/SmartRemainderTask';
import Features from './components/features/Features';
import Frequenlty from './components/frequenlty/Frequenlty';
import LastCall from './components/lastCall/LastCall';
import Testimonials from './components/testi-monial/Testimonials';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Front></Front>
    <Features></Features>
    <Remainder></Remainder>
    <SeamlessScheduling></SeamlessScheduling>
    <SmartRemainderTask></SmartRemainderTask>
    <Ourfeatures></Ourfeatures>
    <Testimonials></Testimonials>
    <Pricing></Pricing>
    <Frequenlty></Frequenlty>
    <LastCall></LastCall>
    <Footer></Footer>
   

    </>
   
  );
}

export default App;
