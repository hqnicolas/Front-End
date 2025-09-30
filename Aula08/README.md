---

## Conteúdo
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

---

## Props de forma desestruturada
- Se `props` é um objeto, significa que ele possui atributos. Logo, podemos separar esses atributos em valores únicos.
- Isso é possível fazendo-se a desestruturação do objeto da seguinte forma: `Component({ prop_1, prop_2, prop_n })`.
- Desta forma podemos simplificar a chamada das `props` no JSX do componente.

> #### PRÁTICA:
> 1. Reescreva o `ProductComponent.jsx` e passe as `props` de forma desestruturada: `{ name, category }`.
> 2. Verifique seu funcionamento e faça uma comparação com o método anterior.

---

## Multiplicação/reutilização de componente
- Semelhante às listas, podemos renderizar componentes de forma dinâmica.

> #### PRÁTICA:
> 1. Crie um array contendo 05 objetos no padrão `[ { obj1 }, { obj2 }, … ]`.
> 2. Cada objeto deve conter os atributos: `{ id, title, description }`.
> 3. Crie um componente no seguinte formato: `PostComponent( { title, description } )`.
> 4. Faça a renderização dinâmica do componente de acordo com cada elemento do array.

---

## `children` prop
- Em algumas situações é necessário que um componente tenha conteúdo HTML variável.
- Isso é possível através de uma `prop` especial chamada `children`.

> #### PRÁTICA:
> 1. Crie um novo componente no formato: `GenericComponent( { children } )`.
> 2. Faça duas chamadas dele no componente principal, sendo que em cada chamada deverá ser passado conteúdo HTML diferente para ele.

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

> #### PRÁTICA 02:
> 1. Crie um novo componente chamado `UseStateComponente1.jsx`.
> 2. Crie dois `states`. Exemplo: `value1` e `value2`.
> 3. Crie uma função de incremento e decremento para cada `state`.
> 4. Mostre como resultado a mudança de valores de cada `state` e o produto entre eles.

---

## Exercícios - Postar no AVA

1.  **Com base no trecho de código abaixo, qual componente será renderizado?**
    ```
    const defineComponent = (value) => { return value > 5 }

    <div>
      { defineComponent(5) ? <Component1 /> : <Component2 /> }
    </div>
    ```

2.  **Desenhe o conteúdo gerado pelo trecho de código abaixo:**
    ```
    const carros = [
      {id: 1, marca: 'Volks', modelo: 'Fox', ano: '2018'},
      {id: 2, marca: 'Fiat', modelo: 'Siena', ano: '2015'},
      {id: 3, marca: 'GM', modelo: 'Celta', ano: '2014'},
    ]

    {carros.map((carro) => (
      <p key={carro.id}>{carro.marca} - {carro.modelo} - {carro.ano}</p>
    ))}
    ```

3.  **Qual a funcionalidade das `props` de componente?**

4.  **Qual componente deve ser responsável pela passagem das `props` (o pai ou o filho)?**

5.  **Como deve ser a chamada do componente descrito pelo trecho de código abaixo?**
    ```
    export default function MyProfile({ name, email, job }) {
      return (
        <>
          {/* ... conteúdo do perfil ... */}
        </>
      )
    }
    ```

6.  **O que o trecho de código abaixo produzirá na tela do navegador?**
    ```
    const array = [1, 2, 3];

    {array.map((arr) => ())}
    ```

7.  **Qual a funcionalidade da `children` prop?**

8.  **Considere 3 componentes, um avô, um pai e um filho. O avô deseja escolher o nome do filho sem que o pai saiba (o componente pai apenas repassa a informação). Descreva como seria a chamada dos três componentes utilizando `props`, considerando a transmissão da informação desejada.**

9.  **Qual a funcionalidade do hook `useState`?**

10. **Com base no trecho de código abaixo, qual a mensagem descrita na tag `<p>` *após* o clique no botão?**
    ```jsx
    import { useState } from 'react';

    function ChangeColorComponent() {
      const arrayColors = ['green', 'white', 'red'];
      const [color, setColor] = useState('red');

      return (
        <div>
          <p>A cor atual é: {color}</p>
          <button onClick={() => setColor(arrayColors[1])}>
            Clique
          </button>
        </div>
      );
    }
    ```

11. **Complete o trecho de código abaixo para renderizar uma lista de produtos dentro de uma tabela HTML.**
    ```
    {productsList.map((prod) => (
      <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
      </tr>
    ))}
    ```

12. **Deseja-se que um componente possua duas `props`: `title` e `description`. Complete o trecho de código na área tracejada de forma que as `props` sejam mostradas corretamente na chamada deste componente.**
    ```
    export default function MyComponent( props ) {
      return (
        <div>
          <h2> Título: {props.title} </h2>
          <p> Descrição: {props.description} </p>
        </div>
      )
    }
    ```
