## **FRONT-END**

### **Responsividade e Flexbox**

#### **RESPONSIVIDADE**

  * É a técnica de adaptar, via **CSS**, uma página web para diferentes dispositivos.
  * A variação do **CSS** é baseada na resolução da página.
  * É feita a detecção da resolução de tela do usuário para adaptar o estilo dos elementos **HTML**.
  * As mesmas regras de **CSS** são aplicadas dentro de uma propriedade chamada **media query**.

-----

#### **MEDIA QUERY**

  * É o recurso utilizado para criar os **breakpoints**.
  * Os **breakpoints** são pontos de referência que contêm as instruções **CSS** para a mudança dos estilos.
  * Por exemplo, dentro de um **breakpoint**, você configura uma largura de tela e, em seguida, as regras **CSS** se modificam quando essa largura de referência é atingida.

-----

#### **MEDIA QUERY com `max-width`**

  * O atributo **`max-width`** serve para selecionar uma largura de referência (**breakpoint**) na qual os estilos da página mudam.
  * Funciona no sentido de **redução da largura da tela**.
  * **Exemplo**: Imagine que sua tela tem 1000px de largura e você definiu o **`max-width`** em 300px. Se você for reduzindo o tamanho da tela gradativamente, quando a largura chegar em 300px, ocorrerá a mudança de estilo definida via **CSS** dentro do **media-query**.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div>
    <h3>resposividade</h3>
  </div>
</body>
</html>
```

```css
h3 {
  color: red;
  /* Largura maior */
}

@media screen and (max-width: 300px) {
  h3 {
    color: blue;
    /* Largura menor */
  }
}
```

-----

#### **MEDIA QUERY com `min-width`**

  * É semelhante ao **`max-width`**, porém no sentido inverso, ou seja, quando a largura da tela estiver **aumentando** e atingir o **breakpoint**.
  * É muito utilizado no conceito **mobile first**, aplicado em smartphones.



```css
h3 {
  color: red;
}
@media screen and (min-width: 400px) {
  h3 {
    color: blue;
  }
}
```

```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div>
    <h3>responsividade mobile first</h3>
  </div>
</body>
</html>
```
-----

#### **BREAKPOINTS MAIS COMUNS**

  * **Menor ou igual a 600px**: celular
  * **Entre 600px e 768px**: tablets
  * **Entre 768px e 992px**: mini laptops
  * **Maior ou igual a 992px**: laptops e desktops

-----

#### **MODO PAISAGEM**

  * É possível usar a **media query** para mudar a orientação da tela.
  * Isso é feito atribuindo o valor `landscape` ao atributo **`orientation`**.
  * A mudança ocorre quando a orientação é alterada.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div>
    <h2>responsividade em modo retrato</h2>
    <h3>responsividade em modo paisagem</h3>
  </div>
</body>
</html>
```

```css
h3 {
  color: red;
  display: none;
}
  
@media screen and (orientation: landscape) {
  h3 {
    color: blue;
    display: block;
  }
}
  
h2 {
  display: none;
}
```

-----

### **FLEXBOX**

  * `flex` é um dos valores da propriedade **`display`**.
  * É a forma mais simples e utilizada para organizar elementos em um **container**.
  * O valor **`flex`** deve ser aplicado no **elemento pai** para que os elementos filhos possam ser movimentados.
  * Também é possível aplicar regras específicas aos elementos filhos.

#### **APLICAÇÃO DO FLEX**

```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div style="display: flex;">
    <p style="padding: 20px;">A</p>
    <p style="padding: 20px;">B</p>
    <p style="padding: 20px;">C</p>
  </div>
</body>
</html>
```

-----

#### **FLEX-DIRECTION**

  * Por padrão, o atributo **`flex-direction`** tem o valor `row` (equivalente ao `inline-block`).
  * Se o valor for alterado para `column`, o comportamento será equivalente ao de um `block`.



```html
<div style="display: flex; flex-direction: column;">
  <span>Elemento 1</span>
  <span>Elemento 2</span>
  <span>Elemento 3</span>
</div>
  
<div style="display: flex; flex-direction: row;">
  <p>Elemento 4</p>
  <p>Elemento 5</p>
  <p>Elemento 6</p>
</div>
```

-----

#### **FLEX-WRAP**

  * Por padrão, o **Flexbox** tenta colocar todos os elementos na mesma linha.
  * O atributo **`flex-wrap`** com o valor `wrap` define se os itens dentro de um container devem quebrar para a próxima linha ou permanecer em uma única linha, caso não haja espaço suficiente.



```html
<div class="flex-wrap">
  <div class="container"></div>
  <div class="container"></div>
  <div class="container"></div>
  <div class="container"></div>
  <div class="container"></div>
</div>
```

```css
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
  
.container {
  width: 33%;
  height: 50px;
  border: 1px solid black;
  margin-bottom: 10px;
}
```

-----

#### **POSICIONAMENTO DE ELEMENTOS**

  * É possível alterar o posicionamento no eixo horizontal usando a propriedade **`justify-content`**.
  * Para o posicionamento no eixo vertical, use a propriedade **`align-items`**.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="flex-horizontal">
    <div class="elemento"></div>
  </div>
</body>
</html>
```

```css
.flex-horizontal {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
  
.elemento {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: blue;
}
```

-----

#### **GAP**

  * É um atributo usado para adicionar espaço entre os elementos que estão sob a regra do **Flexbox**.
  * O valor do **`gap`** pode ser atribuído em pixels (`px`), sendo esse valor aplicado a cada um dos elementos.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="flex-gap">
    <div class="elemento"></div>
    <div class="elemento"></div>
  </div>
</body>
</html>
```

```css
.flex-gap {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
  
.elemento {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```



-----

#### **ORDER**

  * É possível alterar a ordem dos elementos em um **Flexbox** usando a propriedade **`order`**.
  * Essa propriedade pode ser configurada tanto no elemento pai quanto nos elementos filhos.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="flex-gap">
    <div class="elemento" id="div_1">A</div>
    <div class="elemento" id="div_2">B</div>
  </div>
</body>
</html>
```

```css
/* CONFIGURAÇÃO NOS ELEMENTOS FILHOS */
#div_1 {
  order: 2;
}
#div_2 {
  order: 1;
}
```

-----

#### **FLEX-GROW**

  * É possível mudar a proporção de um ou mais elementos filhos usando a propriedade **`flex-grow`**.
  * **Exemplo**: Se você colocar **`flex-grow: 2`** em um elemento, ele crescerá duas vezes mais que os outros ao se adaptar ao container.
  * **Observação**: A propriedade **`width`** do elemento que receberá o **`flex-grow`** precisa estar com o valor **`auto`**.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="flex-gap">
    <div id="div_1">A</div>
    <div id="div_2">B</div>
  </div>
</body>
</html>
```

```css
#div_1 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
  
#div_2 {
  width: auto;
  height: 100px;
  background-color: blue;
  flex-grow: 2;
}
```

-----

#### **FLEX-BASIS**

  * É possível definir a largura base de um elemento usando a propriedade **`flex-basis`**.
  * Você pode trabalhar com **`flex-basis`** e **`flex-grow`** juntas.
  * O **`flex-grow`** preencherá toda a largura que o **`flex-basis`** deixar vazia.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="flex-basis">
    <div class="elemento">A</div>
    <div class="elemento maior">B</div>
    <div class="elemento">C</div>
  </div>
</body>
</html>
```

```css
.flex-basis {
  display: flex;
}
  
.elemento {
  border: 1px solid black;
  flex-basis: 100px;
}
  
.maior {
  flex-grow: 1;
}
```

-----

#### **FLEX-SHRINK**

  * O **`flex-shrink`** faz o papel oposto ao **`flex-grow`**.
  * Para usá-lo, é necessário manter o tamanho dos outros elementos.
  * Dessa forma, o elemento com **`flex-shrink`** diminui o seu tamanho para que os outros permaneçam com o tamanho original.
  * **Observação**: Esta propriedade é geralmente utilizada em conjunto com o **`flex-basis`**.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="flex-shrink">
    <div class="elemento">A</div>
    <div class="elemento diferente">B</div>
    <div class="elemento">C</div>
  </div>
</body>
</html>
```

```css
.flex-shrink {
  display: flex;
}
  
.elemento {
  border: 1px solid black;
  flex-basis: 300px;
}
  
.menor {
  flex-shrink: 2;
}
```

-----

#### **AUTO-ALINHAMENTO**

  * A propriedade **`align-self`** alinha um elemento de forma diferente dos demais.
  * É possível, por exemplo, centralizar um elemento enquanto os outros seguem a regra de alinhamento do container.



```html
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="auto-alinhamento">
    <div class="elemento">A</div>
    <div class="elemento diferente">B</div>
    <div class="elemento">C</div>
  </div>
</body>
</html>
```

```css
.auto-alinhamento {
  display: flex;
  height: 300px;
  align-items: flex-end;
}
  
.elemento {
  border: 1px solid black;
  flex-basis: 200px;
}
  
.diferente {
  align-self: center;
}
```

