import React from 'react';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h2>Welcome to My Website</h2>
      <p>This is a beautiful and minimalistic website created with Next.js and TypeScript.</p>
    </section>
  );
};

export default Hero;
