import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일을 import

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainFrst from './components/Main/MainFrst';
import MainScnd from './components/Main/MainScnd';
import MainThr from './components/Main/MainThr';
import MainFrth from './components/Main/MainFrth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroFrst from './components/Intro/IntroFrst';
import IntroScnd from "./components/Intro/IntroScnd";
import IntroThrd from "./components/Intro/IntroThrd";
import IntroFrth from "./components/Intro/IntroFrth";
import IntroFfth from "./components/Intro/IntroFfth";
// import Test from "./components/Test";

import ScrollEvent from "./components/ScrollEvent";
import ScrollTopBtn from "./components/ScrollTopBtn";

// import Scroller from "./components/Scroller";



function App() {

  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <MainFrst />
                <MainScnd />
                <MainThr />
                <MainFrth /> 
              </>
            } />
            <Route path="/aboutUs" element={
              <>
                <IntroFrst />
                <IntroScnd />
                <IntroThrd />
                <IntroFrth />
                <IntroFfth />
              </>
            } />
          </Routes>
          <Footer />
        </div>
          <ScrollEvent />
          <ScrollTopBtn />
      </Router>
  );
}

export default App;
