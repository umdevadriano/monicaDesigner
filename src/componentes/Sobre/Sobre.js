import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import TextoCabe from '../TextoCabe/TextoCabe';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Styles from './Sobre.module.css';
import imagem from '../Banner/png.png';

const Sobre = () => {
  return (
    <div className={Styles.Container} id="Sobre">
      <TextoCabe texto="Sobre nós" />
      <div className={Styles.ContainerProfissional}>
        <CardProfissional
          titulo=" titulo"
          texto="« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.  "
          foto={imagem}
        />
        <TextoCorpo
          texto="
          « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. » "
        />
      </div>
    </div>
  );
};

export default Sobre;
