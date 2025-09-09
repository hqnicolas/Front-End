## DOM (Document Object Model)

* O DOM é uma representação em forma de árvore da estrutura de um arquivo HTML.
* Todos os elementos estão mapeados no DOM e são representados na árvore como **nós**.
* Em cada nó (elemento) pode-se fazer operações tais como leitura, inserção e remoção de elementos, tudo via JavaScript.
* Também é possível observar eventos tais como movimentos e cliques do mouse, teclado, etc.

### DOM: Estrutura em forma de árvore

<img width="800" height="828" alt="image" src="https://github.com/user-attachments/assets/5d4fd01e-9fa5-4889-bd8e-01cdb316f098" />


```html
<body>
    <h1 id="title">Blog</h1>
    <div id="container">
        <div class="posts">
            <h2>Post 1</h2>
            <p>Lorem, ipsum dolor sit amet…</p>
        </div>
        <div class="posts">
            <h2>Post 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing…</p>
        </div>
    </div>
    <a href="">Clique aqui!</a>
</body>
```

---

## Navegando pelo DOM

```javascript
// Acessa o corpo do documento
console.log(document.body);

// Acessa todos os nós filhos do corpo (incluindo texto e comentários)
console.log(document.body.childNodes);

// Acessa o quarto nó filho do corpo (neste caso, o div#container)
console.log(document.body.childNodes[3]);

// Acessa os nós filhos do div#container
console.log(document.body.childNodes[3].childNodes);

// Acessa o texto do primeiro elemento dentro do container (Post 1)
console.log(document.body.childNodes[3].childNodes[1].textContent);

// Acessa o texto do segundo elemento dentro do container (Post 2)
console.log(document.body.childNodes[3].childNodes[3].textContent);
```

---

## Selecionando elementos

### Selecionando por Tag

```javascript
const tagTitle = document.getElementsByTagName("h2");

console.log(tagTitle);
console.log(tagTitle[0].textContent); // "Post 1"
console.log(tagTitle[1].textContent); // "Post 2"
```

### Selecionando por ID

```javascript
const title = document.getElementById("title");

console.log(title);
console.log(title.textContent); // "Blog"
```

### Selecionando por Classe

```javascript
const posts = document.getElementsByClassName("posts");

console.log(posts);
console.log(posts[0].textContent);
```

### Selecionando por Seletor CSS

O `querySelector` retorna apenas o **primeiro** elemento que corresponde ao seletor.
O `querySelectorAll` retorna **todos** os elementos que correspondem ao seletor em uma `NodeList`.

```javascript
// Seleciona todos os elementos com a classe .posts
const postsQuery = document.querySelectorAll(".posts");
console.log(postsQuery);
console.log(postsQuery[0].textContent);

// Seleciona o elemento com o id #container
const container = document.querySelector("#container");
console.log(container);
console.log(container.textContent);
```

---

## Manipulando Elementos

### `appendChild`
Serve para adicionar um novo elemento como o último filho de um elemento pai.

```javascript
const posts = document.getElementsByClassName("posts");

// 1. Cria um novo elemento <p>
const p2 = document.createElement("p");
console.log(p2); // <p></p>

// 2. Adiciona texto a ele
p2.textContent = 'Eu sou o novo parágrafo';
console.log(p2); // <p>Eu sou o novo parágrafo</p>

// 3. Adiciona o novo <p> dentro do primeiro elemento com a classe "posts"
posts[0].appendChild(p2);
```

### `createTextNode`
Cria um nó de texto que pode ser inserido em um elemento.

```javascript
const container = document.querySelector("#container");

// 1. Cria um nó de texto
const myText = document.createTextNode("Inserindo novo título na div container");

// 2. Cria um elemento <h3>
const h3 = document.createElement("h3");

// 3. Adiciona o texto dentro do <h3>
h3.appendChild(myText);

// 4. Adiciona o <h3> completo dentro do container
container.appendChild(h3);
```

---

## Eventos

### Exemplo de estrutura HTML para Eventos

```html
<body>
    <h1>Eventos</h1>
    <button id="button">Clique aqui!</button>
    <h3 id="mouse">Duplo click</h3>
    <h2 id="title">Argumento do evento: clique em mim!</h2>
    <a href="[https://unisatc.com.br/pagina-inicial/](https://unisatc.com.br/pagina-inicial/)">Acessar o site</a>
    <h4>Evento de focus/blur</h4>
    <input type="text" id="input" placeholder="clique dentro do input" />
</body>
```

### Adição de Eventos

```javascript
const btn = document.querySelector("#button");

// Evento quando o mouse entra na área do botão
btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "red";
    console.log("Mouse sobre o botão");
});

// Evento quando o mouse sai da área do botão
btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "blue";
    console.log("Mouse deixou o botão");
});

// Evento de clique
btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});
```

### Eventos do Mouse

```javascript
const mouse = document.querySelector("#mouse");

// Clique duplo
mouse.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});

// Botão do mouse pressionado
mouse.addEventListener("mousedown", () => {
    console.log("Pressionou botão");
});

// Botão do mouse solto
mouse.addEventListener("mouseup", () => {
    console.log("Soltou botão");
});
```

### Argumento do Evento e Coordenadas

```javascript
// O objeto 'event' (geralmente abreviado como 'e') contém informações sobre o evento
const title = document.querySelector("#title");
title.addEventListener("click", (e) => {
    console.log(e); // Mostra o objeto do evento com todos os seus detalhes
});

// Rastreia as coordenadas X e Y do movimento do mouse na página
document.addEventListener("mousemove", (e) => {
    // console.log(`Eixo X: ${e.x}`);
    // console.log(`Eixo Y: ${e.y}`);
});
```

### Eventos do Teclado e `preventDefault`

```javascript
// Evento quando uma tecla é pressionada
document.addEventListener("keydown", (e) => {
    console.log(`Pressionou ${e.key}`);
});

// Evento quando uma tecla é solta
document.addEventListener("keyup", (e) => {
    console.log(`Soltou ${e.key}`);
});

// Removendo o comportamento padrão de um elemento
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
    e.preventDefault(); // Impede que o link redirecione para a outra página
    console.log("Desabilitou ação do link");
});
```

### Eventos de Foco (`focus` e `blur`)

```javascript
const input = document.querySelector("#input");

// 'focus' é acionado quando o usuário clica dentro do elemento
input.addEventListener("focus", (e) => {
    console.log("Efeito de focus!");
});

// 'blur' é acionado quando o usuário clica fora do elemento (perde o foco)
input.addEventListener("blur", (e) => {
    console.log("Efeito de blur!");
});
```
---
