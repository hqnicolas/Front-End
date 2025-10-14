# Exercícios: React Forms

### 1\. Qual evento de um formulário deve ser chamado para o envio dos dados em React?

O evento `onSubmit` deve ser chamado no elemento `<form>` para o envio dos dados.

### 2\. O que deve ser passado ao evento de formulário para que os dados sejam enviados?

Deve ser passada uma função de callback que será executada quando o formulário for submetido. Geralmente, essa função contém a lógica para enviar os dados para um servidor ou realizar outra ação.

### 3\. Qual função do React deve ser utilizada para manipulação dos valores dos inputs de um formulário?

A função (Hook) `useState` do React deve ser utilizada para criar e gerenciar o estado dos valores dos inputs.

### 4\. Qual evento deve ser chamado em cada input do formulário para que ele consiga acionar a função de troca de estados que está relacionada a resposta da Questão 3?

O evento `onChange` deve ser chamado em cada input. Ele será acionado toda vez que o valor do input for alterado, permitindo a atualização do estado correspondente.

### 5\. Qual a funcionalidade da propriedade `value` dos inputs do formulário no momento da edição de um cadastro?

A propriedade `value` é utilizada para preencher o input com os dados existentes do cadastro que está sendo editado. Isso permite que o usuário veja os valores atuais e possa modificá-los.

### 6\. Complete o trecho de código abaixo de forma a permitir o controle dos inputs e o envio dos dados do formulário.

```jsx
import { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const saveForm = (e) => {
    e.preventDefault();
    // resto da lógica de envio
    console.log("Formulário enviado:", { nome, email });
  };

  return (
    <form onSubmit={saveForm}>
      <label htmlFor="name">Nome</label>
      <input 
        type="text" 
        name='name' 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input 
        type="email" 
        name='email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```
