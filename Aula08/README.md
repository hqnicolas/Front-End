---

- Renderização condicional de componentes;
- Renderização de listas;
- Props de componentes;
- Lista de componentes;
- Hook `useState`.

---

## Renderização condicional
- Em React.js, não existe uma sintaxe especial para a escolha de qual componente será renderizado.
- Podemos utilizar as mesmas técnicas usadas em JavaScript para blocos condicionais, tais como `if/else` e operador ternário.

> #### PRÁTICA:
> 1. Crie dois novos componentes: `ConditionalComponent1.jsx` e `ConditionalComponent2.jsx`.
> 2. Dentro do componente principal, crie uma `<div>` e dentro dela aplique a renderização condicional dos dois componentes.

```
function App() {
  let component;
  let condition = true;
  if(condition) {
    component = <ConditionalComponent1 />
  } else {
    component = <ConditionalComponent2 />
  }

  return (
    <>
      {component}

      <div>
        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>
    </>
  )
}
```

---

## Renderização de lista
- Em React.js, uma lista pode ser renderizada através da função `map()`.
- Para cada item da lista, o React exige que seja passada uma chave única (`key`), que ele utiliza para controle.

> #### PRÁTICA:
> 1. Dentro do componente principal, crie um array de objetos.
> 2. Aplique sobre o array a função `map()`, passando seu resultado para outra variável.
> 3. Faça com que para cada elemento mapeado, seja criado um item de lista `<li>`.
>
> *Obs: Essa técnica pode ser aplicada em listas (não ordenadas e ordenadas), tabelas e componentes.*

```
const products = [
  { id: 1, name: 'Laranja' },
  { id: 2, name: 'Uva' },
  { id: 3, name: 'Maçã' },
];

// PRIMEIRA FORMA
const listItems = products.map(product =>
  <li key={product.id}>
    {product.name}
  </li>
);
return (
  <>
    <ul>
      {listItems}
    </ul>

    {/* SEGUNDA FORMA */}
    <ul>
      {products.map((prod) => (
        <li key={prod.id}>{prod.name}</li>
      ))}
    </ul>
  </>
)
```

```
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
```

---

## Passando Props para o componente
- Os componentes usam as `props` para se comunicarem entre si.
- Todo componente pai pode passar informações para os seus componentes filhos.
- É possível enviar entre os componentes qualquer valor, incluindo objetos, arrays e funções.
- A forma tradicional utiliza um objeto chamado `props` passado como parâmetro na criação da função do componente.
- Os atributos do objeto `props` são acessados no retorno da função do componente utilizando *JSX expressions*.

> #### PRÁTICA:
> 1. Crie um novo componente chamado `ProductComponent.jsx`.
> 2. Este novo componente deve conter duas `props`: `name` e `category`.
> 3. Faça duas chamadas deste componente no componente principal passando diferentes valores de `props` para cada um.

```
function ProductComponent(props) {
  return (
    <div>
      <p>Produto: {props.name} - Descrição: {props.category}</p>
    </div>
  )
}

export default ProductComponent
```

```
<ProductComponent name='Arroz' category='Alimento' />
<ProductComponent name='Martelo' category='Ferramenta' />
```

---

## Props de forma desestruturada
- Se `props` é um objeto, significa que ele possui atributos. Logo, podemos separar esses atributos em valores únicos.
- Isso é possível fazendo-se a desestruturação do objeto da seguinte forma: `Component({ prop_1, prop_2, prop_n })`.
- Desta forma podemos simplificar a chamada das `props` no JSX do componente.

> #### PRÁTICA:
> 1. Reescreva o `ProductComponent.jsx` e passe as `props` de forma desestruturada: `{ name, category }`.
> 2. Verifique seu funcionamento e faça uma comparação com o método anterior.

```
function ProductComponent({name, category}) {
  return (
    <div>
      <p>Produto: {name} - Descrição: {category}</p>
    </div>
  )
}

export default ProductComponent
```

```
<ProductComponent name='Arroz' category='Alimento' />
<ProductComponent name='Martelo' category='Ferramenta' />
```

---

## Multiplicação/reutilização de componente
- Semelhante às listas, podemos renderizar componentes de forma dinâmica.

> #### PRÁTICA:
> 1. Crie um array contendo 05 objetos no padrão `[ { obj1 }, { obj2 }, … ]`.
> 2. Cada objeto deve conter os atributos: `{ id, title, description }`.
> 3. Crie um componente no seguinte formato: `PostComponent( { title, description } )`.
> 4. Faça a renderização dinâmica do componente de acordo com cada elemento do array.

```
export default function PostComponent({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
    </div>
  )
}
```

```
<div>
  {listPosts.map((post) => (
    <PostComponent key={post.id} title={post.title} description={post.description} />
  ))}
</div>
```

---

## `children` prop
- Em algumas situações é necessário que um componente tenha conteúdo HTML variável.
- Isso é possível através de uma `prop` especial chamada `children`.

> #### PRÁTICA:
> 1. Crie um novo componente no formato: `GenericComponent( { children } )`.
> 2. Faça duas chamadas dele no componente principal, sendo que em cada chamada deverá ser passado conteúdo HTML diferente para ele.

```
export default function GenericComponent({ children }) {
  return (
    <div>
      <h3>HTML passado pelo componente pai</h3>
      { children }
    </div>
  )
}
```

```
<div>
  <GenericComponent>
    <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
    <hr />
  </GenericComponent>
</div>
<div>
  <GenericComponent>
    <p>Eu sou o segundo conteúdo fornecido pelo componente pai</p>
    <ul>
      <li>Item 01</li>
      <li>Item 02</li>
    </ul>
    <hr />
  </GenericComponent>
</div>
```

---

## Hook `useState`
- Hooks são funções nativas do React.
- Todos os hooks começam com o prefixo `use`.
- O hook `useState` é um dos mais comuns.
- Com ele é possível gerenciar o estado de um ou mais dados.
- O `useState` tem o mesmo princípio de funcionamento dos métodos *getter* e *setter* utilizados em Programação Orientada a Objetos (POO).

> #### PRÁTICA 01:
> 1. Crie um novo componente chamado `MyButtonComponent.jsx`.
> 2. Faça o `import` do hook `useState` e o inicialize com valor `0`.
> 3. Crie uma função que incrementa um contador a cada evento de `click`.
> 4. Faça a utilização deste componente e verifique seu comportamento.

```
import { useState } from 'react'

function MyButtonComponent() {
  const [counter, setCounter] = useState(0);

  const addCounterOnClick = () => setCounter(counter + 1);

  return (
    <button onClick={addCounterOnClick}>
      Clicou {counter} vezes
    </button>
  )
}

export default MyButtonComponent
```

> #### PRÁTICA 02:
> 1. Crie um novo componente chamado `UseStateComponente1.jsx`.
> 2. Crie dois `states`. Exemplo: `value1` e `value2`.
> 3. Crie uma função de incremento e decremento para cada `state`.
> 4. Mostre como resultado a mudança de valores de cada `state` e o produto entre eles.

```
function UseStateComponente1() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  const increaseValue1 = () => setValue1(value1 + 1);
  const decreaseValue1 = () => setValue1(value1 - 1);

  const increaseValue2 = () => setValue2(value2 + 1);
  const decreaseValue2 = () => setValue2(value2 - 1);

  return (
    <>
      <hr />
      <p>Exercício 1: useState</p>
      <p>{value1}</p>
      <button onClick={decreaseValue1}>-</button>
      <button onClick={increaseValue1}>+</button>
      <hr />
      <p>{value2}</p>
      <button onClick={decreaseValue2}>-</button>
      <button onClick={increaseValue2}>+</button>
      <p>Resultado: {value1} * {value2} = {value1 * value2}</p>
    </>
  )
}
```

---

