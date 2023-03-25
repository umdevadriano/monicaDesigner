import React from 'react';
import SvgGmail from '../SvgGmail/SvgGmail';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
import SvgWhatsap from '../SvgWhatsap/SvgWhatsap';
import Styles from './RedeSociais.module.css';

const RedeSociais = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{ justifyContent: `${props.posicao}` }}
    >
      <a
        href="https://wa.me/5511985439741?text=Ol%C3%A1%21+Estou+no+site,+gostaria+de+saber+mais+sobre+seus+produtos!"
        target="blank"
      >
        <SvgWhatsap />
      </a>
      <a
        href="https://www.instagram.com/mogarcianunes/?igshid=YmMyMTA2M2Y%3D"
        target="blank"
      >
        <SvgInstagram />
      </a>
      <a
        href="https://www.instagram.com/mogarcianunes/?igshid=YmMyMTA2M2Y%3D"
        target="blank"
      >
        <SvgGmail />
      </a>
    </div>
  );
};

export default RedeSociais;
