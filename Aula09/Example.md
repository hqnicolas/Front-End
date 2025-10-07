### Passo 1: Criar o Componente da Tabela de Produtos

Primeiro, criamos o componente React que receberá o array de produtos via `props` e o renderizará dinamicamente em uma tabela.

**`ProductTable.jsx`**

```jsx
import React from 'react';
import './ProductTable.css'; // Importando o arquivo de estilos

// Dados de exemplo que seriam passados como props
const produtos = [
  { id: 1, nome: 'Maçã', preco: 'R$ 10,00', estoque: '20,50' },
  { id: 2, nome: 'Banana', preco: 'R$ 8,00', estoque: '40,70' },
  { id: 3, nome: 'Melancia', preco: 'R$ 7,00', estoque: '100,00' },
  { id: 4, nome: 'Melão', preco: 'R$ 9,00', estoque: '30,00' },
  { id: 5, nome: 'Uva', preco: 'R$ 11,00', estoque: '50,00' },
];

export default function ProductTable() {
  return (
    <div className="table-container">
      <h2>Tabela de Produtos</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque (kg)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={produto.id} className={index % 2 === 0 ? 'linha-par' : 'linha-impar'}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.estoque}</td>
              <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-excluir">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

**Observações sobre o código:**

  * O componente `ProductTable` renderiza uma estrutura de tabela HTML (`<table>`).
  * Ele utiliza o método `.map()` no array `produtos` para criar dinamicamente uma linha (`<tr>`) para cada item.
  * A `key={produto.id}` é importante para a performance e identificação única de cada elemento na lista.
  * Adicionei uma lógica de classes dinâmicas (`className={index % 2 === 0 ? 'linha-par' : 'linha-impar'}`) para alternar a cor de fundo das linhas, como visto na imagem.
  * Os botões de "Editar" e "Excluir" também possuem suas próprias classes para estilização.

-----

### Passo 2: Aplicar os Estilos com CSS

Agora, criamos o arquivo CSS para estilizar a tabela e seus elementos, de forma que fique idêntica à do exemplo.

**`ProductTable.css`**

```css
/* Estilos para o container da tabela */
.table-container {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin: 20px;
}

.table-container h2 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 1.5em;
}

/* Estilos gerais da tabela */
.product-table {
  width: 100%;
  border-collapse: collapse; /* Remove o espaçamento entre as bordas das células */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

/* Estilos para as células do cabeçalho e do corpo */
.product-table th,
.product-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

/* Estilo do cabeçalho */
.product-table thead {
  background-color: #4CAF50; /* Verde do exemplo */
  color: white;
}

/* Estilos para as linhas do corpo da tabela */
.product-table tbody tr.linha-par {
  background-color: #f9f9f9; /* Cinza bem claro para linhas pares */
}

.product-table tbody tr.linha-impar {
  background-color: #ffffff; /* Branco para linhas ímpares */
}

/* Estilos para os botões de ação */
.btn-editar,
.btn-excluir {
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f0f0f0;
  margin-right: 5px;
}

.btn-editar:hover,
.btn-excluir:hover {
  background-color: #e0e0e0;
}
```

**Observações sobre o CSS:**

  * `border-collapse: collapse;` é usado para criar as linhas contínuas vistas na imagem.
  * O cabeçalho (`thead`) recebe a cor de fundo verde e texto branco.
  * As classes `.linha-par` e `.linha-impar` controlam a cor de fundo alternada das linhas (`"zebra striping"`), melhorando a legibilidade.
  * Os botões são estilizados para se parecerem com os da imagem, com uma borda sutil e cor de fundo clara.
