import React from 'react';
import TextoRoda from '../TextoRoda/TextoRoda';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={Styles.Container}>
      <TextoRoda
        texto=" Copyright © 2022 - Site de Advocacia | Desenvolvido por: Sampaio S.S
        "
      />
    </div>
  );
};

export default Footer;
