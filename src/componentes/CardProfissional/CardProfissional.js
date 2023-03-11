import React from 'react';
import Styles from './CardProfissional.module.css';

const CardProfissional = (props) => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerImg}>
        <img src={props.foto} alt="foto" />
      </div>
      <div className={Styles.ContainerTexto}>
        <h3>{props.titulo}</h3>
        <h4>{props.texto}</h4>
      </div>
    </div>
  );
};

export default CardProfissional;
