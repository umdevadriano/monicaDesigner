import React from 'react';
import CardProdutos from '../CardProdutos/CardProdutos';
import SvgLapiz from '../SvgLapiz/SvgLapiz';
import Styles from './CardServicos.module.css';
import escolar from './escolar.png';
import identidade from './identidade.png';
import coorporativo from './coorporativo.png';
import papelaria from './papelaria.png';
import Sublimacao from './sublimacao.png';

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
        linkTexto="Saiba mais"
        imagem={papelaria}
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#FFE4E1"
        titulo="Identidade Visual"
        texto="AS PESSOAS PRECISAM OLHAR PARA A SUA
        MARCA COM A MESMA PAIXÃO QUE VOCÊ!"
        // svg={<SvgLapiz />}
        linkTexto="Saiba mais"
        imagem={identidade}
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#FFE4E1"
        titulo="Linha Escolar"
        texto="Conheça a nossa linha de papelaria escolar
        personalizada desenvolvida
        exclusivamente para a sua escola. ."
        linkTexto="Saiba mais"
        imagem={escolar}
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#F4a460"
        titulo="Sublimação"
        texto="Squeeze, Canecas, Ecobags."
        // svg={<SvgLapiz />}
        linkTexto="Saiba mais"
        imagem={Sublimacao}
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#e0ffff"
        titulo="Corporativo"
        texto="Brindes, Kit curso"
        // svg={<SvgLapiz />}
        linkTexto="Saiba mais"
        imagem={coorporativo}
        borda="#f4a460"
      />
    </div>
  );
};

export default CardServicos;
