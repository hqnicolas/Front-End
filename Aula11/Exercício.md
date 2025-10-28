## Exercícios

**1. Deseja-se solicitar ao servidor todos os itens de um determinado cadastro para mostrar na tela do front-end. Qual método HTTP deve ser utilizado para isso?**

  * Resposta: `GET`.

**2. Quantos itens do cadastro de produtos deverá retornar na requisição representada pelo trecho de código abaixo?**

```javascript
const res = await fetch('http://localhost:3000/products?id=4')
```

  * Resposta: Apenas 1 item (aquele que possui `id=4`).

**3. Deseja-se editar todos os campos do cadastro de um produto. Qual método HTTP deve ser utilizado para salvar as alterações?**

  * Resposta: `PUT`.

**4. Deseja-se excluir um registro da lista de itens mostrados na tela. Qual método HTTP deve ser utilizado para isso?**

  * Resposta: `DELETE`.
