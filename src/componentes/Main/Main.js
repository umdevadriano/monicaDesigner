import React from 'react';
import Sobre from '../Sobre/Sobre';
import Styles from './Main.module.css';
import Contato from '../Contato/Contato';
import CardServicos from '../CardsServicos/CardsServicos';

const Main = () => {
  return (
    <div className={Styles.Container}>
      <CardServicos />
      <Sobre />
      <Contato />
    </div>
  );
};

export default Main;
