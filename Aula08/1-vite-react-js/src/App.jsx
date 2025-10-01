import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ConditionalComponent1 from './ConditionalComponent1.jsx'
import ConditionalComponent2 from './ConditionalComponent2.jsx'

function App() {
  const [count, setCount] = useState(0)

  // Renderização condicional usando if/else
  let component;
  let condition = count % 2 === 0; // Alterna entre os componentes com base no número (par ou ímpar)

  if (condition) {
    component = <ConditionalComponent1 />;
  } else {
    component = <ConditionalComponent2 />;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Renderização condicional via operador ternário */}
      <div>
        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App