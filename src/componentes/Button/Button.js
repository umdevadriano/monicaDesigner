import React from 'react';

import Styles from './Button.module.css';
const Button = (props) => {
  return (
    <>
      <a className={Styles.tag} href={props.link} target="blank">
        <div
          className={Styles.Container}
          style={{ height: `${props.largura}` }}
        >
          <div
            style={{
              background: `${props.cor}`,
              color: `${props.corFonte}`,
              width: `${props.tamanho}`,
            }}
          >
            {props.nome}
          </div>
          {props.svg}
        </div>
      </a>
    </>
  );
};

export default Button;
