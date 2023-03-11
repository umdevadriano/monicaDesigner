import React from 'react';
import CardContato from '../CardContato/CardContato';
import Styles from './Contato.module.css';
import TextoCabe from '../TextoCabe/TextoCabe';

const Contato = (props) => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Contato" />
      <div className={Styles.ContainerContato} id="Contato">
        <CardContato />
      </div>
    </div>
  );
};

export default Contato;
