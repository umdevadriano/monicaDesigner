import React from 'react';
import CardProdutos from '../CardProdutos/CardProdutos';
import Styles from './CardServicos.module.css';
import SvgSublimacao from '../SvgSublimacao/SvgSublimacao';
import SvgCoorporativo from '../SvgCoorporativo/SvgCoorporativo';
import SvgIdentidade from '../SvgIdentidade/SvgIdentidade';
import SvgLinhaEscolar from '../SvgLinhaEscolar/SvgLinhaEscolar';
import SvgPapelaria from '../SvgPapelaria/SvgPapelaria';

const CardServicos = () => {
  return (
    <div className={Styles.Container}>
      <CardProdutos
        fundo="#98FB98"
        titulo="Papelaria Personalizada"
        texto="Produtos de papelaria são mais que simples
        objetos de escrita e anotação, eles são
        ferramentas poderosas para ajudar a
        organizar, inspirar e alcançar seus objetivos."
        linkTexto="Saiba mais"
        svg={<SvgPapelaria />}
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#D3D3D3"
        titulo="Identidade Visual"
        texto="AS PESSOAS PRECISAM OLHAR PARA A SUA
        MARCA COM A MESMA PAIXÃO QUE VOCÊ!"
        svg={<SvgIdentidade />}
        linkTexto="Saiba mais"
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#FFE4E1"
        titulo="Linha Escolar"
        texto="Conheça a nossa linha de papelaria escolar
        personalizada desenvolvida
        exclusivamente para a sua escola. ."
        linkTexto="Saiba mais"
        borda="#f4a460"
        svg={<SvgLinhaEscolar />}
      />
      <CardProdutos
        fundo="#F4a460"
        titulo="Sublimação"
        texto="Squeeze, Canecas, Ecobags."
        svg={<SvgSublimacao />}
        linkTexto="Saiba mais"
        borda="#f4a460"
      />
      <CardProdutos
        fundo="#e0ffff"
        titulo="Corporativo"
        texto="Brindes, Kit curso"
        svg={<SvgCoorporativo />}
        linkTexto="Saiba mais"
        borda="#f4a460"
      />
    </div>
  );
};

export default CardServicos;
