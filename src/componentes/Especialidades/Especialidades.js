import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Button from '../Button/Button';
import SvgSeta from '../SvgSeta/SvgSeta';
const Especialidades = () => {
  return (
    <div className={Styles.Container} id="Especialidades">
      <TextoCabe texto="Título" />
      <TextoCorpo texto="« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.  culpa qui officia deserunt mollit anim id est laborum. » " />
      <Button
        nome="Agende um horário"
        tamanho="11rem"
        cor="#ef8354"
        corFonte="#eee"
        svg={<SvgSeta />}
        largura="1rem"
        link="https://wa.me/5511984835370?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+agendar+um+horário"
      />

      <Cards />
    </div>
  );
};

export default Especialidades;
