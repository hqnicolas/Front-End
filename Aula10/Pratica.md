# Sistema de Cadastro de Produtos em React

Este é um projeto simples de um sistema de cadastro de produtos desenvolvido em React. Ele permite ao usuário adicionar, visualizar, editar e excluir produtos de uma lista.

## Telas da Aplicação

### Formulário de Cadastro e Lista com Produtos

Quando há produtos cadastrados, a aplicação exibe o formulário de cadastro e a tabela com a lista de produtos.

### Lista de Produtos Vazia

Quando não há nenhum produto cadastrado, uma mensagem é exibida no lugar da tabela.

-----

## Estrutura dos Componentes

### `App.jsx`

Este é o componente principal que gerencia o estado e a lógica da aplicação.

#### Lógica do Componente (`App.jsx`)

```jsx
import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [edit, setEdit] = useState(false);

  const clearForm = () => {
    setName("");
    setPrice("");
    setStock("");
  };

  const saveProduct = (e) => {
    e.preventDefault();
    if (!edit) {
      const newProduct = { id, name, price, stock };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setId(v => v + 1);
    } else {
      const productIndex = products.findIndex(prod => prod.id === id);
      const updatedProduct = { id, name, price, stock };
      const updatedProducts = [...products];
      updatedProducts[productIndex] = updatedProduct;
      setProducts(updatedProducts);
      setEdit(false);
    }
    clearForm();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const editProduct = (id) => {
    const product = products.find(prod => prod.id === id);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setStock(product.stock);
    setEdit(true);
  };

  const handleName = (e) => { setName(e.target.value) };
  const handlePrice = (e) => { setPrice(e.target.value) };
  const handleStock = (e) => { setStock(e.target.value) };

  return (
    <>
      <ProductForm 
        name={name} 
        price={price} 
        stock={stock} 
        handleName={handleName}
        handlePrice={handlePrice} 
        handleStock={handleStock} 
        saveProduct={saveProduct}
      />
      <div>
        {products.length > 0 ? (
          <ProductTable 
            products={products} 
            deleteProduct={deleteProduct} 
            editProduct={editProduct} 
          />
        ) : (
          <h3 style={{marginBottom: '30px'}}>Nenhum produto cadastrado...</h3>
        )}
      </div>
    </>
  );
}

export default App;
```

-----

### `ProductForm.jsx`

Componente responsável pelo formulário de cadastro de produtos.

```jsx
import './ProductForm.css';

export default function ProductForm({ name, price, stock, handleName, handlePrice, handleStock, saveProduct }) {
  return (
    <div className='container'>
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={(e) => saveProduct(e)}>
        <label className='form-label' htmlFor="nome">Nome:</label>
        <input 
          className='form-input' 
          value={name} 
          type="text" 
          name="nome" 
          onChange={(e) => handleName(e)} 
          required 
        />
        
        <label className='form-label' htmlFor="preco">Preço:</label>
        <input 
          className='form-input' 
          value={price} 
          type="number" 
          name="preco" 
          onChange={(e) => handlePrice(e)} 
          required 
        />
        
        <label className='form-label' htmlFor="estoque">Estoque:</label>
        <input 
          className='form-input' 
          value={stock} 
          type="number" 
          name="estoque" 
          onChange={(e) => handleStock(e)} 
          required 
        />
        
        <input className='form-submit' type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
```

#### Estilização do Formulário (`ProductForm.css`)

```css
.container {
  width: 50%;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-submit {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
```

-----

### `ProductTable.jsx`

Componente que exibe os produtos em uma tabela.

```jsx
import classes from './ProductTable.module.css';

export default function ProductTable({ products, deleteProduct, editProduct }) {
  const currencyFormatter = (value) => {
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const numberFormatter = (value) => {
    return parseFloat(value).toFixed(2).replace('.', ',');
  };

  return (
    <div className={classes.table_container}>
      <h2>Lista de Produtos</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque (kg)</th>
            <th style={{ textAlign: 'center' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{currencyFormatter(prod.price)}</td>
              <td>{numberFormatter(prod.stock)}</td>
              <td className={classes.actions}>
                <button onClick={() => editProduct(prod.id)}>Editar</button>
                <button onClick={() => deleteProduct(prod.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

#### Estilização da Tabela (`ProductTable.module.css`)

```css
body {
  font-family: Arial, sans-serif;
}

.table_container h2 {
    margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table th {
  background-color: #4CAF50;
  color: white;
}

.actions {
  display: flex;
  justify-content: space-around;
}

.actions button {
  padding: 5px;
}
```
