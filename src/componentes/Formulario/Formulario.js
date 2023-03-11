import React from 'react';
import Styles from './Formulario.module.css';
import emailjs from '@emailjs/browser';
import Enviado from '../Enviado/Enviado';

const Formulario = () => {
  debugger;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const [status, setStatus] = React.useState('true');

  const onSubmit = async (event) => {
    event.preventDefault();
    if ((name === '') | (email === '') | (mensagem === '')) {
      alert('Preencha todos os campos');
      return;
    }
    const templatParams = {
      from_name: name,
      menssage: mensagem,
      email: email,
    };

    emailjs
      .send(
        'service_gq3kkr4',
        'template_x3u24e6',
        templatParams,
        'QlVUl2MGU8m66qclo',
      )
      .then(
        (response) => {
          console.log('Email enviado', response.status, response.text);
          setEmail('');
          setName('');
          setMensagem('');
          setStatus(false);
        },
        (err) => {
          console.log('Erro:', err);
        },
      );
  };

  return (
    <div className={Styles.Container}>
      {status ? (
        <form onSubmit={onSubmit} noValidate>
          <lord-icon
            src="https://cdn.lordicon.com/tkgyrmwc.json"
            trigger="loop"
            style={{ width: '70px', height: '70px' }}
          ></lord-icon>
          <div className="form-group mb-2">
            <label className="mb-2">
              <strong>Nome</strong>
            </label>
            <input
              required
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="mb-2">
              <strong>Digite seu email</strong>
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="form-control"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="mb-2">
              <strong>Mensagem</strong>
            </label>
            <textarea
              name="mensagem"
              value={mensagem}
              onChange={(event) => {
                setMensagem(event.target.value);
              }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      ) : (
        <Enviado />
      )}
      <h3>{process.env.REACT_APP_EXEMPLO}</h3>
    </div>
  );
};
export default Formulario;
