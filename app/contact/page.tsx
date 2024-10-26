import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Hero from '../components/Hero/hero';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ padding: '2rem' }}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out via email or through our social media channels.</p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
