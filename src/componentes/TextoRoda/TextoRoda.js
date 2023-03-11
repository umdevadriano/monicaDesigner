import React from 'react';
import Styles from './TextoRoda.module.css';

const TextoRoda = (props) => {
  return (
    <div className={Styles.Container}>
      <span>{props.texto}</span>
    </div>
  );
};

export default TextoRoda;
