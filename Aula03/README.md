# Guia de Formulários em HTML

## INTRODUÇÃO
- Os formulários são utilizados para enviar dados do usuário para o servidor (back-end);
- As informações inseridas no formulário podem ser validadas. Exemplo: formatos de número de telefone, senhas, CPF, etc;
- A criação de um formulário é feita através da tag `form`.

## INPUT: text
- Ao configurarmos o atributo `type` para `text`, o usuário poderá digitar letras ou números;
- No entanto, deve-se tomar cuidado ao digitar números pois eles serão entendidos como strings.

### ATRIBUTO: value
- Podemos definir um valor inicial ao `input`;
- Utilizado quando o `input` já possui um valor padrão ou quando trata-se de uma edição.

### ATRIBUTO: disabled
- Utilizado para desabilitar/bloquear o `input`;
- Desta forma, o usuário não poderá inserir nenhum valor no `input`.

### ATRIBUTO: placeholder
- Utilizado como dica para o usuário;
- Aparece em forma de uma mensagem, mas desaparece quando o usuário começa a digitar algo.

## ENVIO DO FORMULÁRIO
- É possível enviar os dados preenchidos no formulário para o servidor através de um `input` do tipo `submit`, que tem o aspecto de um botão;
- O envio dos dados ocorre através de uma requisição HTTP, que necessita de integração com o back-end.

## RESET DO FORMULÁRIO
- Pode-se resetar ou limpar todos os campos do formulário;
- Utiliza-se um `input` do tipo `reset`;
- Também possui o aspecto de um botão, que ao ser clicado limpa o formulário.

### ATRIBUTO: required
- Utilizado como validação para qualquer campo do formulário;
- Exige que o usuário preencha o `input`, caso contrário, o formulário não é enviado e uma mensagem de alerta aparecerá.

## TIPOS DE `input`
### email
- Semelhante ao de texto;
- Possui validação automática verificando se o texto contém o formato de um e-mail.

### number
- Ao configurar o `type` como `number`, o `input` aceitará apenas valores numéricos;
- Inclui setas para alterar o valor clicando.

### date
- Utilizado para selecionar uma data;
- Inclui um calendário para facilitar a seleção de datas futuras ou passadas, além de permitir digitação.

### password
- Configura o `type` como `password`;
- O texto inserido será exibido como `*`, ocultando a informação.

### radio
- Permite selecionar apenas uma opção entre várias;
- Por exemplo, escolher uma única opção de gênero.

### checkbox
- Semelhante ao `radio`, mas permite selecionar múltiplas opções;
- Pode cancelar itens selecionados também.

### file (arquivo)
- Configurando o `type` como `file`, será possível enviar arquivos ao servidor.

## ELEMENTOS DE SELEÇÃO
### Elemento de Seleção Simples
- Usa as tags `<select>` para criar uma lista de opções;
- Cada opção é definida pela tag `<option>`.

### Seleção Múltipla
- Para permitir a seleção de mais de uma opção ao mesmo tempo;
- Basta adicionar o atributo `multiple` na tag `<select>`.

## ELEMENTO TEXTAREA
- Permite a inserção de textos maiores;
- Utiliza a tag `<textarea>`.

## ELEMENTOS `fieldset` e `legend`
- A tag `<fieldset>` é usada para agrupar inputs relacionados;
- A tag `<legend>` descreve os inputs agrupados, conectando-os de forma mais clara.

## Elemento `datalist`
- Semelhante à tag `<select>`, mas com função de autocomplete;
- Oferece sugestões de valores existentes enquanto o usuário digita;
- As opções são definidas pela atributo `list` no `<input>` correspondente.
