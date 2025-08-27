
### **EXERCÍCIOS**

1.  Qual o nome da propriedade responsável pelo efeito da responsividade?

2.  O que são **breakpoints**?

3.  Considere uma tela com largura inicial de 350px. Com base no trecho de código abaixo, o que acontecerá quando a tela atingir largura de 500px?


```
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
<div>
  <p id="p_1">Elemento 1</p>
  <p id="p_2">Elemento 2</p>
</div>
</body>
</html>
```
```
#p_1 {
  color: red;
}

#p_2 {
  display: none;
}

@media screen and (min-width: 500px) {
  #p_1 {
    display: none;
  }
  #p_2 {
    display: block;
  }
}

```

4.  Com base no trecho de código abaixo, em qual elemento deve-se atribuir na propriedade `display` o valor `flex` para que os elementos tenham o comportamento de **Flexbox**?



```html
<div class="elemento-pai">
  <div class="elemento-filho"></div>
</div>
```

5.  Deseja-se alinhar lado a lado três elementos HTML. Qual valor deve ser atribuído para a propriedade **`flex-direction`**?

6.  Qual propriedade **CSS** deve ser configurada para fazer o alinhamento horizontal de um elemento **HTML**?

7.  Qual propriedade **CSS** deve ser configurada para fazer o alinhamento vertical de um elemento **HTML**?

8.  Dois elementos **HTML** dispostos lado a lado estão muito próximos. Qual propriedade **CSS** deve ser configurada para aumentar o espaçamento lateral entre eles?
