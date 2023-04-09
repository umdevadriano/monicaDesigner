import React from 'react';

import Styles from './CardProdutos.module.css';

const CardProdutos = (props) => {
  return (
    <div
      style={{
        background: `linear-gradient( ${props.fundo}, Transparent 100% , rgba(0, 0, 0, 0)100%), url(${props.imagem})`,
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        width: `${props.tamanho}`,
        height: `${props.altura}`,
        backgroundSize: 'cover',
        // border: `1px solid ${props.borda}`,
        backgroundRepeat: 'no-repeat',
      }}
      className={Styles.Container}
    >
      <h1>{props.titulo}</h1>
      <span>{props.texto}</span>
      <div>{props.svg}</div>
      <a href="/">{props.linkTexto}</a>
    </div>
  );
};

export default CardProdutos;
