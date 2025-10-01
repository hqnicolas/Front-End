
## Exercícios - Postar no AVA

1.  **Com base no trecho de código abaixo, qual componente será renderizado?**
    ```
    const defineComponent = (value) => { return value > 5 }

    <div>
      { defineComponent(5) ? <Component1 /> : <Component2 /> }
    </div>
    ```

Rta.: <Component2 />

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

Rta.: 
| Marca | Modelo | Ano  |
|-------|--------|------|
| Volks | Fox    | 2018 |
| Fiat  | Siena  | 2015 |
| GM    | Celta  | 2014 |

3.  **Qual a funcionalidade das `props` de componente?**
Rta.: props vai passar dados de um pai para um componente filho

4.  **Qual componente deve ser responsável pela passagem das `props` (o pai ou o filho)?**
Rta.: Responsabilidade do  pai

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
Rta.: 
<MyProfile 
  name="João Silva" 
  email="joao@example.com" 
  job="Desenvolvedor Front-end" 
/>


6.  **O que o trecho de código abaixo produzirá na tela do navegador?**
    ```
    const array = [1, 2, 3];

    {array.map((arr) => ())}
    ```
Rta.: nada na tela do navegador

7.  **Qual a funcionalidade da `children` prop?**
Rta.: acessar o conteúdo entre as tags

8.  **Considere 3 componentes, um avô, um pai e um filho. O avô deseja escolher o nome do filho sem que o pai saiba (o componente pai apenas repassa a informação). Descreva como seria a chamada dos três componentes utilizando `props`, considerando a transmissão da informação desejada.**

Rta.:
O Avo passa nome Lucas para o Pai, o Pai apenas repassa props.nome para o Filho, sem saber o conteúdo usa a prop normalmente.

9.  **Qual a funcionalidade do hook `useState`?**

Rta.:
Ele retorna um array com dois valores, o estado atual, uma função para atualizar esse estado

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

Rta.: A cor atual é: white

11. **Complete o trecho de código abaixo para renderizar uma lista de produtos dentro de uma tabela HTML.**
    ```
    {productsList.map((prod) => (
      <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
      </tr>
    ))}
    ```
 Rta.:
 ```
 <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Nome</th>
    </tr>
  </thead>
  <tbody>
    {productsList.map((prod) => (
      <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
      </tr>
    ))}
  </tbody>
</table>
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

Rta.:
```
<MyComponent 
  title="Titulo Top baguarai" 
  description="o título é bom mas a descrição não" 
/>
```

