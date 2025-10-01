import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductComponent from './ProductComponent' // importe o novo componente

function App() {
  const [count, setCount] = useState(0)

  // Array de produtos
  const products = [
    { id: 1, name: 'Laranja' },
    { id: 2, name: 'Uva' },
    { id: 3, name: 'Maçã' },
  ]

  // Mapeando para <li>
  const listItems = products.map(product =>
    <li key={product.id}>{product.name}</li>
  )

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

      {/* Renderização de Lista - Forma 1 */}
      <ul>
        {listItems}
      </ul>

      {/* Renderização de Lista - Forma 2 */}
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>

      {/* Tabela com map */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Componente com props */}
      <ProductComponent name="Arroz" category="Alimento" />
      <ProductComponent name="Martelo" category="Ferramenta" />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App