
## PRÁTICA

Conforme exemplo abaixo, crie um contador que incrementa ou decrementa uma variável ao clicar em um dos botões. Crie também uma limitação para o botão de decremento para impedir que ele assuma valores negativos.

<img width="433" height="197" alt="image" src="https://github.com/user-attachments/assets/cf4cf6aa-56e2-431b-9d25-869cc56368ff" />


## EXERCÍCIOS

1.  Qual a finalidade do DOM (Document Object Model)?
2.  Através do comando `document.querySelector('#my-title')` o elemento HTML será selecionado via CSS pelo nome de sua classe ou pelo nome de seu ID?
3.  Qual a finalidade do comando `appendChild`?
4.  Qual a finalidade do comando `createTextNode`?
5.  Considere a seguinte situação: existe em seu documento HTML 05 elementos de título `<h3>`. Você deseja selecionar todos de uma só vez para aplicar, via DOM, uma ação qualquer. Qual o nome do comando utilizado para selecioná-los?
6.  Qual o nome do comando utilizado para selecionar, via DOM, o elemento representado pelo trecho de código abaixo?
    ```html
    <h3 id="my-title">Aulas de Front-end</h3>
    ```
7.  Qual a finalidade do comando `addEventListener()`?
8.  Qual o resultado obtido pelo trecho de código abaixo?
    ```html
    <a href="[https://unisatc.com.br/pagina-inicial/](https://unisatc.com.br/pagina-inicial/)">Acessar o site</a>
    ```
    ```javascript
    const a = document.querySelector("a");
    a.addEventListener("click", (e) => {
        e.preventDefault();
    });
    ```
