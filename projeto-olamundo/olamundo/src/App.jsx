import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const eventobotao = () =>{
  
  alert('evento clicado')
}
const cliqueemmin = () => 
  {
  alert('Você clicou em mim!')
  }

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>  
      
      <div>
        <h1>Olá, mundo!</h1>
        <p>Este é um projeto React com Vite.</p>
        <button onClick={(cliqueemmin)}>Clique Em Mim </button>
        <button onClick={(eventobotao)}>evento de botao</button>  
      </div>
      
    </>
  )
}

export default App
