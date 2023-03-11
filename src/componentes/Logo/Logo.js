import React from 'react';
import Styles from '../Logo/Logo.module.css';

const Logo = (props) => {
  return (
    <div className={Styles.Container}>
      <img src={props.logo} style={{ width: `${props.tamanho}` }} alt="logo" />
    </div>
  );
};

export default Logo;
