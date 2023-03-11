import React from 'react';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
import SvgLinkedin from '../SvgLinkedin/SvgLinkedin';
import Styles from './RedeSociais.module.css';

const RedeSociais = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{ justifyContent: `${props.posicao}` }}
    >
      <a
        href="https://www.instagram.com/camilasantosdeus/?igshid=OGQ2MjdiOTE%3D"
        target="blank"
      >
        <SvgInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/camila-santos-5853b2b7"
        target="blank"
      >
        <SvgLinkedin link="https://www.linkedin.com/in/camila-santos-5853b2b7" />{' '}
      </a>
    </div>
  );
};

export default RedeSociais;
