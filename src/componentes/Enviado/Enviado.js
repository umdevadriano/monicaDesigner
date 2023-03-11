import React from 'react';
import Styles from './Enviado.module.css';

const Enviado = () => {
  return (
    <div className={Styles.Container}>
      <lord-icon
        src="https://cdn.lordicon.com/rhvddzym.json"
        trigger="loop"
        style={{ width: '250px', height: '250px' }}
      ></lord-icon>
      <p>
        O nosso compromisso é com você! Prezamos pela entrega do trabalho com
        qualidade e sentimos muita gratidão pela sua confiança em breve
        entraremos em contato.
      </p>
    </div>
  );
};

export default Enviado;
