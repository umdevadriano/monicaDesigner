import React from 'react';
import CardContato from '../CardContato/CardContato';
import Styles from './Contato.module.css';

const Contato = (props) => {
  return (
    <div className={Styles.Container} id="Contato">
      <CardContato />
    </div>
  );
};

export default Contato;
