# Exercícios: Postar no AVA

1.  **Deseja-se aplicar CSS global a todos os elementos do projeto. Em qual arquivo da aplicação deve-se estilizar os elementos?**

Rta.: index.css

2.  **Um elemento pai possui uma tag `<h2>` que foi configurada para ter cor azul. Dentro dele foi chamado um componente filho que também possui uma tag `<h2>` configurada, através de sua classe de componente filho, para ter cor vermelha. Qual cor da tag `<h2>` será mostrada na tela do navegador?**

Rta.: vermelho

3.  **Com base no trecho de código abaixo, qual será a cor da tag `<p>`? JUSTIFIQUE!**

    ```javascript
    const defineColor = (a, b) => { return a > b }
    ```

    ```jsx
    <p style={ defineColor(3, 4) ? {color: 'green'} : {color: 'red'} }>CSS inline dinâmico</p>
    ```

Rta.: Vermelho, 
Jstfctiva.: chamando a função "defineColor" o resultado é false levando ao red.
