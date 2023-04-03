import React from 'react';
import CardProdutos from '../CardProdutos/CardProdutos';
import SvgLapiz from '../SvgLapiz/SvgLapiz';
import Styles from './CardServicos.module.css';

const CardServicos = () => {
  return (
    <div className={Styles.Container}>
      <CardProdutos
        fundo="#FFE4E1"
        titulo="Papelaria Personalizada"
        texto="Produtos de papelaria são mais que simples
        objetos de escrita e anotação, eles são
        ferramentas poderosas para ajudar a
        organizar, inspirar e alcançar seus objetivos."
        svg={<SvgLapiz />}
        linkTexto="Saiba mais"
      />
      <CardProdutos
        fundo="#FFE4E1"
        titulo="Identidade Visual"
        texto="AS PESSOAS PRECISAM OLHAR PARA A SUA
        MARCA COM A MESMA PAIXÃO QUE VOCÊ!"
        svg={<SvgLapiz />}
        linkTexto="Saiba mais"
      />
      <CardProdutos
        fundo="#FFE4E1"
        titulo="Linha Escolar"
        texto="Conheça a nossa linha de papelaria escolar
        personalizada desenvolvida
        exclusivamente para a sua escola. ."
        svg={<SvgLapiz />}
        linkTexto="Saiba mais"
      />
      <CardProdutos
        fundo="#F4a460"
        titulo="Sublimação"
        texto="Squeeze, Canecas, Ecobags."
        svg={<SvgLapiz />}
        linkTexto="Saiba mais"
      />
      <CardProdutos
        fundo="#e0ffff"
        titulo="Corporativo"
        texto="Brindes, Kit curso"
        svg={<SvgLapiz />}
        linkTexto="Saiba mais"
      />
    </div>
  );
};

export default CardServicos;
