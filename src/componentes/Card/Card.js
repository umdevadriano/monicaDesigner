import React from 'react';
import Styles from './Card.module.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Card = (props) => {
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
    <div data-aos={props.anima} className={Styles.Container}>
      {props.icone}
      <h3>{props.titulo}</h3>
      <h4>{props.texto}</h4>
    </div>
  );
};

export default Card;
