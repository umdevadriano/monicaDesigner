import React from 'react';
import Styles from './Texto.module.css';

const Texto = (props) => {
  return (
    <div className={Styles.Container}>
      <h2 style={{ fontSize: `${props.tamanho}`, color: `${props.cor}` }}>
        {props.texto}
      </h2>
    </div>
  );
};

export default Texto;
