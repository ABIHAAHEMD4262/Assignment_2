import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/hero';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
