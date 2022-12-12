import React from 'react';
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './components/parts/Footer';
import Header from './components/parts/Header';
import RouteApi from './routes/RouteApi';

function App() {
  return (
    <>
      <Header />
      <RouteApi />
      <Footer />
    </>
  );
}

export default App;
