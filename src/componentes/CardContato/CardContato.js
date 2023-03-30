import React from 'react';
import Styles from './CardContato.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  return (
    <div className={Styles.Container}>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
