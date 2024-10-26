import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Hero from '../components/Hero/hero';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ padding: '2rem' }}>
        <h2>About Us</h2>
        <p>This website was built to showcase the versatility of Next.js and TypeScript.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
