import React from 'react';
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './components/parts/Footer';
import Header from './components/parts/Header';
import RouteApi from './routes/RouteApi';
import ScrollTop from './components/parts/ScrollTop';

function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <RouteApi />
      <Footer />
    </>
  );
}

export default App;
