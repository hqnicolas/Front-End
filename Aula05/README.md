# FRONT-END

## Aula 06 – JavaScript I

### JavaScript: Introdução

  * JavaScript é uma linguagem de script orientada a objetos usada para tornar páginas Web interativas (animações complexas, botões clicáveis, pop-up, etc.);
  * Há também versões mais avançadas do lado do servidor tais como o **Node.js**, que permitem adicionar mais funcionalidades tais como comunicação com banco de dados, gerenciamento e controle de rotas, etc;
  * JavaScript possui uma biblioteca padrão de objetos, como: `Array`, `Date`, e `Math`, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações.

### Tipos de dados e operadores

  * **Tipo** é a forma como um dado é classificado;
  * Os tipos mais comuns são:
      * **Number**;
      * **String**;
      * **Boolean**;
      * **Empty values** (`null`, `undefined`);
      * **Object**;

### Tipos de dados e operadores

#### Tipo Number

```javascript
console.log(typeof 5);
console.log(typeof 5.2);
console.log(typeof -5);
```

#### Operações aritméticas

```javascript
console.log(2 + 2);
console.log(10 - 5);
console.log(2 * 4);
console.log(8 / 2);
console.log(8 ** 2);
console.log(8 % 2);
```

### Tipos de dados e operadores

#### Tipo String

```javascript
console.log("Hello world");
console.log('Hello world');
console.log(`Hello world`);
console.log(typeof "Oi");
```

#### Concatenação de strings

```javascript
console.log("Qual, " + " o seu" + " nome?");
```

#### Interpolação: precisa usar `` ` ``

```javascript
console.log(`A soma de 5 + 5 é: ${5 + 5}`);
```

### Tipos de dados e operadores

#### Tipo Boolean

```javascript
console.log(typeof true);
console.log(typeof false);
```

#### Comparações

```javascript
// Idêntico
console.log(5 <= 5);
console.log(9 == "9");
console.log(5 < 5);
console.log(9 === "9");
console.log(10 == 10);
console.log(9 != "9");
console.log(10 == 9);
console.log(9 !== "9");
console.log(10 != 9);
console.log(10 > 2);
console.log(10 > 100);
console.log(10 > 100 && 10 != 9); // && (AND)
console.log(10 > 100 || 10 != 9); // || (OR)
console.log(!true); // ! (NOT)
```

### Declarações

  * **var**: Declara uma variável, opcionalmente, inicializando-a com um valor;
  * **let**: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor;
  * **const**: Declara uma constante de escopo de bloco, apenas de leitura.

> [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar\_and\_types](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

### Declarações

#### Variáveis

```javascript
var nome = "Rodrigo";
console.log(nome);
console.log(typeof nome);

let idade = 43;
console.log(idade);
console.log(typeof idade);
```

#### Declaração múltipla

```javascript
const a = 10, b = 20, c = 30;
console.log(a, b, c);
```

### Estruturas

#### `if`-`else`

```javascript
const user = "Rodrigo";
if (user === "Rodrigo") {
  console.log("Olá Rodrigo!");
}

const logado = false;
if (logado) {
  console.log("Usuário autenticado");
} else {
  console.log("Usuário não autenticado!");
}
```

### Estruturas

#### Operador ternário

Forma mais simples de implementar um `if-else`. Útil em situações onde o código a ser executado envolve apenas uma instrução.

**Protótipo**:

```
teste ? instrução 1 : instrução 2
```

Onde “?” equivale ao `if` e “:” equivale ao `else`.

**Exemplo**:

```javascript
const logado = true;
logado ? console.log("Usuário autenticado") : console.log("Usuário não autenticado!");
```

### Estruturas

#### `switch-case`

```javascript
const curso = "SW";
switch (curso) {
  case "SW":
    console.log("Você é um aluno de Engenharia de Software");
    break;
  case "ENC":
    console.log("Você é um aluno de Engenharia de Computação");
    break;
  case "EE":
    console.log("Você é um aluno de Engenharia Elétrica");
    break;
  default:
    console.log("Curso não encontrado");
}
```

### Estruturas

#### `while`

```javascript
let i = 0
while (i < 5) {
  console.log(`Iteração ${i + 1}`);
  i++;
}
```

#### `do while`

```javascript
let j = 10;
do {
  console.log(`Iteração: ${j}`);
  j -= 1;
} while (j > 0);
```

### Estruturas

#### `for`

```javascript
const n = 5
for(let i = 0; i < n ; i++) {
  console.log(i)
}
```

#### `for` + `break`

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log(`Paramos na iteração ${i + 1}`);
    break; // interrompe o laço de repetição
  }
}
```

#### `for` + `continue`

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // pula o índice 3
  }
  console.log(`Iteração: ${i}`)
}
```

### Funções

#### Função sem passagem de parâmetro e sem retorno

```javascript
function myFunction() {
  console.log('Hello world..!')
}
myFunction()

const myArrowFunction = () => {
  console.log('Hello my arrow function..!')
}
myArrowFunction()
```

#### Função com passagem de parâmetro e sem retorno

```javascript
function defineParOuImpar_1(n) {
  if(n % 2 === 0) {
    console.log(`${n} é par!`)
  } else {
    console.log(`${n} é impar!`)
  }
}
defineParOuImpar_1(3)
```

### Funções

```javascript
function defineParOuImpar_2(n) {
  n % 2 === 0 ? console.log(`${n} é par!`) : console.log(`${n} é impar!`)
}
defineParOuImpar_2(5)

const defineParOuImpar_3 = (n) => {
  n % 2 === 0 ? console.log(`${n} é par!`) : console.log(`${n} é impar!`)
}
defineParOuImpar_3(8)
```

#### Função com passagem de parâmetro e com retorno

```javascript
function calculaRaizQuadrada_1(n) {
  return Math.sqrt(n)
}
console.log(calculaRaizQuadrada_1(81))

const calculaRaizQuadrada_2 = (n) => {
  return Math.sqrt(n)
}
console.log(calculaRaizQuadrada_2(9))
```

### Arrays

#### Criação de array

```javascript
let names = ['rodrigo', 'maria'];
console.log('Nomes: ', names);
```

#### Acesso via índice

```javascript
console.log('Valor no índice: ', names[0]);
names[0] = 'joão';
console.log('Nomes', names);
```

#### Algumas propriedades

```javascript
console.log('Tamanho: ', names.length);
console.log('Chaves/índices: ', Object.keys(names));
```

### Arrays

#### Alguns métodos

```javascript
names.push('joão', 'pedro', 'ana'); // adicionando no final
console.log(names);
names.pop();
console.log(names);
const filteredNames = names.filter((name) => name.length > 4);
console.log('filteredNames: ', filteredNames)
const found = names.find((name) => name.length >= 5);
console.log('found: ', found)
const foundIndex = names.findIndex((name) => name.length >= 5);
console.log('foundIndex: ', foundIndex)
```

### Arrays

#### `slice`: gera um subarray ao lhe informar os índices inicial e final

```javascript
const slicedNames = names.slice(0, 2);
console.log(slicedNames);
```

#### De um valor inicial até o final

```javascript
const slicedNames_2 = names.slice(1);
console.log(slicedNames_2);
```

#### `reverse`: inverte o array

```javascript
const reverseNames = names.reverse();
console.log(reverseNames);
```

### Arrays

#### Percorrendo arrays

```javascript
for( let i = 0; i < names.length; i++ ) {
  console.log(names[i])
}

names.forEach((name) => console.log(name))

names.map((name) => console.log(name))

names.forEach((name) => {
  if(name.length >= 5) {
    console.log(name);
  }
});

const numbers = [ 1, 2, 3, 4]
const newNumbers = numbers.map((number) => number * 2)
console.log('numbers: ', numbers);
console.log('newNumbers: ', newNumbers);
```

### Objetos

#### Criação na forma literal

```javascript
const aluno = {
  nome: "João",
  idade: 21,
  curso: "Programador",
};
```

#### Acesso aos atributos

```javascript
console.log(aluno.nome);
console.log(aluno.nome.length);
console.log(aluno.idade);
console.log(aluno.curso);
console.log(typeof aluno);
```

### Objetos

#### Criando atributos

```javascript
aluno.notas = [6, 7, 8];
aluno.email = 'email@email.com';
console.log(aluno);
```

#### Deletando atributos

```javascript
delete aluno.idade;
delete aluno.id;
console.log(aluno);
```

### Objetos

#### Criação por função construtora

```javascript
const cliente = new Object();
cliente.nome = 'José';
cliente.sobrenome = 'Brasil';
cliente.cidade = 'Criciúma';
cliente.email = 'jose@email.com';
cliente.mostraDados = function () {
  console.log(`Nome: ${this.nome} ${this.sobrenome}\nCidade: ${this.cidade}\nE-mail: ${this.email}`);
}

console.log(cliente.nome);
console.log(cliente.email);
console.log(cliente);
cliente.mostraDados();
```

#### Deletando atributos

```javascript
delete cliente.email;
console.log(cliente);
```

### Objetos

#### Criação pela instância de uma classe

```javascript
class Pessoa {
  constructor(nome, sobrenome, cidade, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cidade = cidade;
    this.email = email;
  }
  
  mostraDados() {
    console.log(`Nome: ${this.nome} ${this.sobrenome}\nCidade: ${this.cidade}\nE-mail: ${this.email}`);
  }
}

const pessoa = new Pessoa('Rodrigo', 'Maciel', 'Araranguá', 'rodrigo@email.com');
console.log(pessoa)
pessoa.mostraDados()
```
