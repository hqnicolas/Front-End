
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
