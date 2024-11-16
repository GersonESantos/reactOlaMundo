import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function tick() {
  const element = (
    <div>
      <h1>Olá, eu so um relogio</h1>
      <h2>Agora são {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  root.render(element)
  //return element
}
setInterval(tick, 1000)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const element = <h1>Olá, mundo!</h1>

const name = 'GersonES'
const pessoa = {  nome: 'Gerson', 
                lastname: 'Santos',
                idade: 67};

const formataNome = (pessoa) => {
  return pessoa.nome + ' ' + pessoa.lastname + ' ' + pessoa.idade
}
const eventobotao = () =>{
  
  alert('evento clicado')
}
const cliqueemmin = () => 
  {
  alert('Você clicou em mim!')
  }

function App() {
  
  return (
    <>  
      
      <div>
        {element}
        Meu nome é {name}
        <p>Este é um projeto React com Vite.</p>
        <button onClick={(cliqueemmin)}>Clique Em Mim </button>
        <button onClick={(eventobotao)}>evento de botao</button>  
        <br/>
        Nome formatado: {formataNome(pessoa)}
      
        </div>
      
    </>
  )
}

export default App
