import React from 'react';

import Styles from './CardProdutos.module.css';

const CardProdutos = (props) => {
  return (
    <div style={{ background: `${props.fundo}` }} className={Styles.Container}>
      <h1>{props.titulo}</h1>
      <span>{props.texto}</span>
      <div>{props.svg}</div>
      <a href="/">{props.linkTexto}</a>
    </div>
  );
};

export default CardProdutos;
