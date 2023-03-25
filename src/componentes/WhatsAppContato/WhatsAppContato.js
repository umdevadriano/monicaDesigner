import React from 'react';
import Styles from './WhatsAppContato.module.css';
// import imagem from '../WhatsAppContato/whatsapp.png';
import SvgMensage from '../SvgMensage/SvgMensage';

const WhatsAppContato = (props) => {
  return (
    <div className={Styles.container}>
      <span className={Styles.containerSpan}>
        <a href={props.link} target="blank">
          {/* <img src={imagem} alt="Logo whatsapp" /> */}
          <SvgMensage />
          <span>{props.texto}</span>
        </a>
      </span>
    </div>
  );
};

export default WhatsAppContato;
