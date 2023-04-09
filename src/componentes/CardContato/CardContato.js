import React from 'react';
import Styles from './CardContato.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';
import Informacoes from '../Informacoes/Informacoes';

const CardContato = () => {
  let funcionamento = [
    'segunda-feira, 09:00–17:00',
    'terça-feira,   09:00–17:00',
    'quarta-feira,  09:00–17:00',
    'quinta-feira,  09:00–17:00',
    'sexta-feira,   09:00–17:00',
    'sábado,        09:00–17:00',
  ];
  return (
    <div className={Styles.Container}>
      <div className={Styles.ContaineriInfo}>
        <Informacoes titulo="Funcionamento" Itens={funcionamento} link={true} />

        <RedeSociais posicao="right" />
      </div>
    </div>
  );
};

export default CardContato;
