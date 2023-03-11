import React from 'react';
import Styles from './TextoCorpo.module.css';

const TextoCorpo = (props) => {
  return (
    <div className={Styles.Container}>
      <h2>{props.texto}</h2>
    </div>
  );
};

export default TextoCorpo;
