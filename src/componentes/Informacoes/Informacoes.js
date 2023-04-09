import React from 'react';
import Styles from './Informacoes.module.css';

const Informacoes = (props) => {
  let arrayLista = props.Itens;
  return (
    <div className={Styles.Container}>
      <span>{props.titulo}</span>
      <ul>
        {arrayLista.map((itens) => (
          <li> {itens}</li>
        ))}
      </ul>
    </div>
  );
};

export default Informacoes;
