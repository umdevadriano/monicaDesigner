import React from 'react';
import Styles from './TextoCabe.module.css';

const TextoCabe = (props) => {
  return (
    <div className={Styles.Container}>
      <h1>{props.texto}</h1>
    </div>
  );
};

export default TextoCabe;
