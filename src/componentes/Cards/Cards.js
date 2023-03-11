import React from 'react';
import Card from '../Card/Card';
import Styles from './Cards.module.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Cards = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className={Styles.Container}>
      <Card
        // anima="fade-right"
        titulo="Título"
        texto="« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. culpa qui officia deserunt mollit anim id est laborum. » "
        icone={
          <lord-icon
            src="https://cdn.lordicon.com/gqdnbnwt.json"
            trigger="hover"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
        }
      />
      <Card
        // anima="fade-down"
        titulo="Título"
        texto="« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. culpa qui officia deserunt mollit anim id est laborum. » "
        icone={
          <lord-icon
            src="https://cdn.lordicon.com/fhtaantg.json"
            trigger="hover"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
        }
      />
      <Card
        // anima="fade-left"
        titulo="Título"
        texto="« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. culpa qui officia deserunt mollit anim id est laborum. » "
        icone={
          <lord-icon
            src="https://cdn.lordicon.com/raayvuis.json"
            trigger="hover"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
        }
      />
    </div>
  );
};

export default Cards;
