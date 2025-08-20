# Guia de Formulários em HTML

## INTRODUÇÃO
- Os formulários são utilizados para enviar dados do usuário para o servidor (back-end);
- As informações inseridas no formulário podem ser validadas. Exemplo: formatos de número de telefone, senhas, CPF, etc;
- A criação de um formulário é feita através da tag `form`.

## INPUT: text

<img width="423" height="230" alt="image" src="https://github.com/user-attachments/assets/7fc4ce9e-3e75-4118-954f-f2c0f3667bc0" />
<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/295cbbe7-62ff-4c0f-9be3-29659668fd2f" />

- Ao configurarmos o atributo `type` para `text`, o usuário poderá digitar letras ou números;
- No entanto, deve-se tomar cuidado ao digitar números pois eles serão entendidos como strings.

### ATRIBUTO: value

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/0de04b09-f00b-42dd-90e4-4d8e56245da6" />

- Podemos definir um valor inicial ao `input`;
- Utilizado quando o `input` já possui um valor padrão ou quando trata-se de uma edição.

### ATRIBUTO: disabled

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/9529c98b-7eec-48db-80f1-d392997f967b" />

- Utilizado para desabilitar/bloquear o `input`;
- Desta forma, o usuário não poderá inserir nenhum valor no `input`.

### ATRIBUTO: placeholder

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/e03bde14-bc4f-434e-b3d7-1118a013dea4" />

- Utilizado como dica para o usuário;
- Aparece em forma de uma mensagem, mas desaparece quando o usuário começa a digitar algo.

## ENVIO DO FORMULÁRIO

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/60b7f4ac-a5be-431c-b36f-483517f4f9fc" />

- É possível enviar os dados preenchidos no formulário para o servidor através de um `input` do tipo `submit`, que tem o aspecto de um botão;
- O envio dos dados ocorre através de uma requisição HTTP, que necessita de integração com o back-end.

## RESET DO FORMULÁRIO

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/5c781c5e-7fa2-4396-9b0d-c9737834e66c" /><img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/443f1f1f-e612-427f-80a3-4c2ef5e4d2ff" />

- Pode-se resetar ou limpar todos os campos do formulário;
- Utiliza-se um `input` do tipo `reset`;
- Também possui o aspecto de um botão, que ao ser clicado limpa o formulário.

### ATRIBUTO: required

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/7f54719e-a733-4f00-addb-9736aae23e18" />

- Utilizado como validação para qualquer campo do formulário;
- Exige que o usuário preencha o `input`, caso contrário, o formulário não é enviado e uma mensagem de alerta aparecerá.

## TIPOS DE `input`
### email

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/8dfd2b81-a84f-4d4b-aa7b-295f7f22568a" />

- Semelhante ao de texto;
- Possui validação automática verificando se o texto contém o formato de um e-mail.

### number

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/b50c7e4a-7a5d-4597-933d-77985a6a8265" />

- Ao configurar o `type` como `number`, o `input` aceitará apenas valores numéricos;
- Inclui setas para alterar o valor clicando.

### date

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/c28e443a-b015-43e5-a8a7-b870f98044d6" />

- Utilizado para selecionar uma data;
- Inclui um calendário para facilitar a seleção de datas futuras ou passadas, além de permitir digitação.

### password

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/0ece39a5-0d7c-401b-91fe-4a7d41e1dabb" />

- Configura o `type` como `password`;
- O texto inserido será exibido como `*`, ocultando a informação.

### radio

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/219087f5-324d-43e8-b5a1-8c315c3f994e" /><img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/1f92b24e-5aa2-4d00-924c-bb707168ee97" />

- Permite selecionar apenas uma opção entre várias;
- Por exemplo, escolher uma única opção de gênero.

### checkbox

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/2f193930-be93-4bf1-863b-db0dcb08b96b" /><img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/dc927cb2-095f-472d-8d5a-b2af2eb55059" />

- Semelhante ao `radio`, mas permite selecionar múltiplas opções;
- Pode cancelar itens selecionados também.

### file (arquivo)

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/7d58cbf8-c16f-4e10-b3b1-c2db233e0873" />

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/6cd0ea31-b971-4cf3-b730-12cd701ac24e" />

- Configurando o `type` como `file`, será possível enviar arquivos ao servidor.

## ELEMENTOS DE SELEÇÃO
### Elemento de Seleção Simples

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/c12a39f3-b124-461f-8325-b08841d44456" />

- Usa as tags `<select>` para criar uma lista de opções;
- Cada opção é definida pela tag `<option>`.

### Seleção Múltipla

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/845481a1-b3a7-434e-b7ce-150266ab8bbb" />

- Para permitir a seleção de mais de uma opção ao mesmo tempo;
- Basta adicionar o atributo `multiple` na tag `<select>`.

## ELEMENTO TEXTAREA

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/fa115eaa-5cdd-4c6a-a197-b92e024ec9de" />

- Permite a inserção de textos maiores;
- Utiliza a tag `<textarea>`.

## ELEMENTOS `fieldset` e `legend`

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/a104db6b-6afc-4a49-ae7a-08b348a94dbf" />

- A tag `<fieldset>` é usada para agrupar inputs relacionados;
- A tag `<legend>` descreve os inputs agrupados, conectando-os de forma mais clara.

## Elemento `datalist`

<img width="203" height="223" alt="image" src="https://github.com/user-attachments/assets/f08ba71c-58c6-48d3-b22a-0a19d0eba3f0" />

- Semelhante à tag `<select>`, mas com função de autocomplete;
- Oferece sugestões de valores existentes enquanto o usuário digita;
- As opções são definidas pela atributo `list` no `<input>` correspondente.
