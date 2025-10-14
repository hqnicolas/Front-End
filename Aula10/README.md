# Formulários em React.js

Este guia aborda as práticas fundamentais para a criação e manipulação de formulários em aplicações React.

## Estrutura Básica do Formulário

Em React, a criação de formulários utiliza a tag `<form>`, de forma semelhante ao HTML tradicional. No entanto, existem algumas diferenças importantes:

  - **`htmlFor`**: O atributo `for` das tags `<label>` deve ser substituído por `htmlFor` para evitar conflitos com a palavra-chave `for` do JavaScript.
  - **`onSubmit`**: A submissão do formulário é controlada pelo evento `onSubmit` na tag `<form>`, que chama uma função JavaScript para processar os dados.
  - **Sem `action`**: O atributo `action` não é utilizado. O envio dos dados para o servidor é gerenciado por uma função assíncrona dentro do componente.

### Exemplo de Estrutura

```jsx
function MeuFormulario() {
  const saveForm = (e) => {
    // Lógica para enviar os dados
  };

  return (
    <form onSubmit={saveForm}>
      <h3>Cadastro de Usuários</h3>

      <label htmlFor='nome'>Nome</label>
      <input type="text" name='nome' />

      <label htmlFor='email'>E-mail</label>
      <input type="email" name='email' />

      <input type="submit" value="Cadastrar" />
    </form>
  );
}
```

## Controlando os Inputs com `useState`

Para que o React possa gerenciar e reagir aos dados de um formulário, utilizamos o hook `useState`. Cada campo de entrada (input) terá seu próprio estado.

  - **`useState`**: Cria uma variável de estado para armazenar o valor do input.
  - **`onChange`**: É um evento adicionado a cada input. Ele chama a função de atualização do estado sempre que o valor do campo muda, garantindo que o estado e a UI estejam sincronizados.
  - **`value`**: O atributo `value` do input é vinculado à variável de estado. Isso transforma o input em um "componente controlado", onde o React gerencia seu valor.

### Exemplo de Inputs Controlados

```jsx
import { useState } from 'react';

function MeuFormulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveForm = (e) => {
    // Lógica de envio
  };

  return (
    <form onSubmit={saveForm}>
      <h3>Cadastro de Usuários</h3>

      <label htmlFor='nome'>Nome</label>
      <input
        type="text"
        name='nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor='email'>E-mail</label>
      <input
        type="email"
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="submit" value="Cadastrar" />
    </form>
  );
}
```

## Submissão do Formulário

A função chamada pelo evento `onSubmit` é responsável por validar e enviar os dados. O primeiro passo dentro dela é sempre desativar o comportamento padrão de recarregamento da página do formulário.

  - **`event.preventDefault()`**: Este método impede que o navegador recarregue a página, permitindo que a lógica de envio seja executada via JavaScript.

### Exemplo da Função de Envio

```jsx
const saveForm = (e) => {
  // Impede o comportamento padrão de recarregar a página
  e.preventDefault();

  // Aqui você pode adicionar a lógica de validação
  // e envio dos dados para um servidor/back-end.
  console.log("Dados do formulário:", { name, email });
};
```

## Limpando o Formulário Após o Envio

Após o envio dos dados, é uma boa prática limpar os campos do formulário. Como os inputs são controlados pelo estado, basta atualizar as variáveis de estado para valores vazios.

Isso é feito dentro da função de envio, após a lógica de submissão ser concluída com sucesso.

### Exemplo de Limpeza

```jsx
import { useState } from 'react';

function MeuFormulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveForm = (e) => {
    e.preventDefault();

    // ...lógica para enviar os dados para o servidor

    // Limpa os campos do formulário
    setName("");
    setEmail("");
  };

  // ...resto do JSX do formulário
}
```

## Edição de Dados

A propriedade `value` nos inputs é fundamental para a edição de registros. Ao carregar os dados de um item para edição, você pode simplesmente inicializar os estados com esses dados, e o formulário será preenchido automaticamente, pronto para ser modificado.
