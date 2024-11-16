import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div>
      <h1>Olá, eu sou um relógio</h1>
      <h2>Agora são {horaAtual}.</h2>
    </div>
  );
}

function App() {
  const name = 'GersonES';
  const pessoa = {
    nome: 'Gerson',
    lastname: 'Santos',
    idade: 67,
  };

  const formataNome = (pessoa) => {
    return `${pessoa.nome} ${pessoa.lastname} (${pessoa.idade})`;
  };

  const eventoBotao = () => {
    alert('Evento clicado');
  };

  const cliqueEmMim = () => {
    alert('Você clicou em mim!');
  };

  return (
    <div>
      <Relogio />
      <h1>Olá, mundo!</h1>
      <p>Meu nome é {name}</p>
      <p>Este é um projeto React com Vite.</p>
      <button onClick={cliqueEmMim}>Clique Em Mim</button>
      <button onClick={eventoBotao}>Evento de botão</button>
      <br />
      <p>Nome formatado: {formataNome(pessoa)}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
