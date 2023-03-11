import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={Styles.Container}>
      <span>
        Copyright © 2023 - Monica Garcia | Desenvolvido por:{' '}
        <a href="https://adrianosampaio.com.br/" target="blank">
          - Adriano Sampaio
        </a>
      </span>
    </div>
  );
};

export default Footer;
