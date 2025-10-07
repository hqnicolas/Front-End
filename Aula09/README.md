# React.js: Aplicando Estilos em Componentes

Este guia apresenta diferentes maneiras de aplicar estilos CSS em seus projetos React.

## 1\. CSS Global

A estilização global é usada para definir estilos que se aplicam a todos os elementos do projeto. Essas configurações geralmente são feitas no arquivo `index.css`.

**Exemplo prático:**
Para resetar as margens e paddings e definir uma fonte padrão para todo o projeto, e também colorir todas as tags `<h3>` de vermelho, o `index.css` ficaria assim:

```css
* {
  margin: 0;
  padding: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

h3 {
  color: red;
}
```

## 2\. CSS por Componente (Classes)

É comum criar um arquivo CSS com o mesmo nome do componente (ex: `App.css` para o componente `App.jsx`) para estilizar os elementos específicos daquele componente.

O ideal é usar classes ou IDs para evitar que os estilos "vazem" e afetem outros componentes. A chamada de classe no React é feita com o atributo `className`.

**Exemplo prático:**
Para estilizar o título principal no `App.jsx`, você pode criar uma classe em `App.css` e aplicá-la da seguinte forma:

```jsx
// No App.jsx
<h1 className="nome-da-classe">Meu Título</h1>
```

## 3\. Estilo Inline

O estilo inline no React é semelhante ao do HTML, mas os estilos são passados como um objeto JavaScript. As propriedades CSS são escritas em `camelCase`.

**Padrão de uso:** `style={{ propriedadeCss: 'valor' }}`

**Exemplo prático:**
Para alterar a cor e centralizar o texto de um parágrafo:

```jsx
<p style={{ color: 'green', textAlign: 'center' }}>
  Eu sou o primeiro conteúdo fornecido pelo componente pai
</p>
```

## 4\. Estilo Inline Dinâmico

É possível aplicar estilos inline condicionalmente, geralmente utilizando um operador ternário.

**Padrão de uso:** `style={ condicao ? { estiloSeVerdadeiro } : { estiloSeFalso } }`

**Exemplo prático:**
O texto do parágrafo mudará de cor com base no resultado de uma condição. Neste caso, como a condição é `true`, a cor será verde.

```jsx
<p style={ true ? { color: 'green' } : { color: 'red' } }>
  CSS inline dinâmico
</p>
```

## 5\. Classes Dinâmicas

Assim como o estilo inline, você pode aplicar classes CSS de forma dinâmica e condicional.

**Padrão de uso:** `className={ condicao ? 'classe-1' : 'classe-2' }`

**Exemplo prático:**
O `<h3>` receberá a classe `main-title` ou `title` dependendo do resultado da condição.

```jsx
<h3 className={ true ? 'main-title' : 'title' }>
  Classes dinâmicas
</h3>
```

## 6\. CSS Modules

CSS Modules permitem que o escopo do CSS seja local para um componente específico, evitando vazamento de estilos. Para usar, o arquivo de estilo deve seguir o padrão `NomeDoComponente.module.css`.

**Exemplo prático:**

1.  Crie o arquivo `GenericComponent.module.css`:
    ```css
    .title {
      color: black;
      padding: 10px;
      text-align: center;
    }
    ```
2.  Importe e use no seu componente `GenericComponent.jsx`:
    ```jsx
    import classes from './GenericComponent.module.css';

    export default function GenericComponent({ children }) {
      return (
        <div>
          <h3 className={classes.title}>HTML passado pelo componente pai</h3>
          {children}
        </div>
      );
    }
    ```
    Dessa forma, a classe `.title` só será aplicada a este componente, sem afetar outros elementos `<h3>` ou classes `.title` no restante da aplicação.
