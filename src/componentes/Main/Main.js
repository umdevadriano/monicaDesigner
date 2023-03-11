import React from 'react';
import Sobre from '../Sobre/Sobre';
import Styles from './Main.module.css';
import Contato from '../Contato/Contato';

const Main = () => {
  return (
    <div className={Styles.Container}>
      <Sobre />
      <Contato />
    </div>
  );
};

export default Main;
