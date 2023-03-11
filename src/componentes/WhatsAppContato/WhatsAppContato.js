import React from 'react';
import Styles from './WhatsAppContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';

const WhatsAppContato = (props) => {
  return (
    <div className={Styles.container}>
      <span className={Styles.containerSpan}>
        <a href={props.link} target="blank">
          <img src={imagem} alt="Logo whatsapp" />
          <span>{props.texto}</span>
        </a>
      </span>
    </div>
  );
};

export default WhatsAppContato;
