import React from 'react';
import Styles from './CardContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  const whats = ['(11)985439741'];

  return (
    <div className={Styles.Container}>
      <div>
        <h1>
          <br />
          <small>
            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed »{' '}
          </small>
        </h1>
      </div>

      <ul>
        {whats.map((whatsapp) => (
          <li>
            <a
              href="https://wa.me/5511985439741?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+agendar+um+horário"
              target="blank"
            >
              <img src={imagem} alt="Logo whatsapp" />
              {whatsapp}
            </a>
          </li>
        ))}
      </ul>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
