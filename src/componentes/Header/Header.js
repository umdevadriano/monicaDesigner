import React from 'react';
import Styles from './Header.module.css';
import Texto from '../Texto/Texto';
// import RedeSociais from '../RedeSociais/RedeSociais';

const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <Texto
        texto="Personalizados "
        texto2="  Para Você."
        tamanho="2rem"
        cor="#fff"
      />
      {/* <RedeSociais posicao="right" /> */}
    </div>
  );
};

export default Header;
