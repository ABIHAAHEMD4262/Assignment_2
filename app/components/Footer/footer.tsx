import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
