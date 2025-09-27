## O que é React.js?

- Criado em 2011 pelo Facebook, é uma biblioteca JavaScript utilizada para construir interfaces de usuário (UI).
- Baseado em componentes reutilizáveis, o React facilita o desenvolvimento de interfaces interativas e dinâmicas.
- Componentes são funções JavaScript capazes de gerar HTML e possuir comportamentos específicos.
- Os componentes constituem pequenas partes simples que juntas, podem gerar aplicações mais complexas.
- Usa JSX, uma extensão de JavaScript que permite escrever código semelhante a HTML dentro do JavaScript.
- **Documentação Oficial:** [https://react.dev/](https://react.dev/)

---

## Criação de uma aplicação React.js

1.  Dentro da pasta das aulas, crie uma nova pasta com algum nome relacionado ao seu projeto. Exemplo: `aulas_react`.
2.  Digite no terminal o comando para iniciar um projeto com Vite:
    ```bash
    npm create vite@latest
    ```
3.  Digite o nome do projeto e pressione Enter. Exemplo: `my-first-react-project`.
4.  Através da seta do teclado escolha a opção **React** e pressione Enter.
5.  Após, escolha a opção **JavaScript** e pressione Enter.
6.  Por fim, digite a sequência de comandos para navegar até a pasta, instalar as dependências e iniciar o servidor de desenvolvimento:
    ```bash
    # Navega para a pasta do projeto recém-criado
    cd my-first-react-project

    # Instala todas as dependências listadas no package.json
    npm install

    # Inicia o servidor de desenvolvimento
    npm run dev
    ```
7.  Após o último comando, um link para acesso à aplicação aparecerá no terminal. Exemplo: `http://localhost:5173/`.

---

## Estrutura da aplicação

-   `node_modules`: Contém a instalação de todas as dependências/bibliotecas da aplicação.
-   `public`: Pode conter arquivos estáticos tais como imagens, fontes, etc.
-   `index.html`: Arquivo principal onde todos os conteúdos da aplicação serão injetados via DOM.
-   `src/assets`: Contém arquivos de mídia, como imagens e SVGs.
-   `src/main.jsx`: É o arquivo de inicialização, onde o React é renderizado no `index.html`.
-   `src/App.jsx`: É o componente principal da aplicação.
-   `package.json`: Contém os scripts e o nome das dependências do projeto.

---

## Criação de componentes

-   É comum criarmos os componentes dentro de uma pasta chamada `components` dentro da pasta `src`.
-   O componente deve possuir extensão `.jsx` e seu nome em formato **PascalCase** (Ex: `MeuComponente`).
-   Dentro dele, cria-se e exporta-se uma função com o mesmo nome do componente. Seu retorno será uma sequência de elementos HTML (JSX).

-   **PRÁTICA:**
    1.  Crie a pasta `src/components`.
    2.  Dentro dela, crie o componente chamado `IntroComponent.jsx`.
    3.  Crie a função do componente e adicione algum conteúdo HTML, conforme o exemplo abaixo.

    *src/components/IntroComponent.jsx*
    ```jsx
    function IntroComponent() {
      return (
        <div>
          <h1>Minha Primeira Aplicação React</h1>
          <p>Este é um componente de introdução criado para a aula.</p>
        </div>
      );
    }

    export default IntroComponent;
    ```

---

## Uso de componentes

-   Após sua criação, é necessário **importar** e depois **instanciar** o componente para que ele possa ser utilizado.
-   O `import` e sua chamada deverão ser feitos dentro do componente principal (`App.jsx`) ou dentro de outro componente que irá utilizá-lo.

-   **PRÁTICA:**
    1.  Faça o `import` do novo componente no cabeçalho do `App.jsx`.
    2.  Dentro do retorno da função do `App.jsx`, faça a instância (chamada) do novo componente em formato de tag HTML.
    3.  Verifique o resultado na tela do seu navegador.

    *src/App.jsx*
    ```jsx
    import IntroComponent from './components/IntroComponent';

    function App() {
      return (
        <div>
          {/* Outros elementos podem estar aqui */}
          <IntroComponent />
        </div>
      );
    }

    export default App;
    ```

---

## JSX Expressions

-   O retorno da função de um componente é chamado de **JSX**.
-   JSX é uma sintaxe que parece HTML, mas é processada pelo JavaScript.
-   Podemos executar código JavaScript diretamente dentro do JSX. Para isso, utiliza-se a expressão dentro de chaves: `{expressaoJS}`.

-   **PRÁTICA:**
    -   Repita a sequência de códigos conforme a figura abaixo. Observe o resultado na tela do seu navegador.

    *src/components/IntroComponent.jsx*
    ```jsx
    function IntroComponent() {
      const name = "Aluno";
      const sum = 10 + 20;

      return (
        <div>
          <h1>Bem-vindo, {name}!</h1>
          <p>A soma de 10 + 20 é: {sum}</p>
          <p>A hora atual é: {new Date().toLocaleTimeString()}</p>
        </div>
      );
    }

    export default IntroComponent;
    ```

---

## Hierarquia de componentes

-   É possível chamar um componente dentro de outro, não apenas no componente principal (`App.jsx`).
-   O componente que chama denomina-se **pai** e o componente chamado denomina-se **filho**.

-   **PRÁTICA:**
    1.  Crie um novo componente chamado `ChildComponent.jsx` em `src/components`.
    2.  Adicione algum conteúdo HTML no retorno de sua função.
    3.  Faça o `import` e a chamada do componente filho (`ChildComponent`) dentro do `IntroComponent.jsx`.
    4.  Verifique o resultado na tela do seu navegador.

    *src/components/ChildComponent.jsx*
    ```jsx
    function ChildComponent() {
      return (
        <p>Eu sou um componente filho!</p>
      );
    }

    export default ChildComponent;
    ```

    *src/components/IntroComponent.jsx*
    ```jsx
    import ChildComponent from './ChildComponent';

    function IntroComponent() {
      return (
        <div>
          <h1>Componente Pai (Intro)</h1>
          <ChildComponent />
        </div>
      );
    }

    export default IntroComponent;
    ```

---

## Eventos

-   Semelhante ao JavaScript puro, os eventos são essenciais para a dinâmica de qualquer aplicação React.
-   Os eventos no React são nomeados usando **camelCase**, em vez de letras minúsculas. Ex: `onclick` no HTML se torna `onClick` no React.
-   Com JSX, você passa uma função como manipulador de eventos, em vez de uma string. Ex: `onClick={minhaFuncao}`.
-   **Documentação de Eventos (Legacy):** [https://legacy.reactjs.org/docs/events.html](https://legacy.reactjs.org/docs/events.html)

-   **PRÁTICA:**
    1.  Crie um novo componente chamado `EventComponent.jsx` e faça sua chamada no `App.jsx`.
    2.  Crie um botão dentro dele e adicione um evento de clique conforme o código abaixo.
    3.  Verifique o comportamento do clique sobre o botão no console do seu navegador.

    *src/components/EventComponent.jsx*
    ```jsx
    function EventComponent() {

      // Função que será chamada no clique do botão
      const handleClick = () => {
        console.log("O botão foi clicado!");
        alert("Você clicou no botão!");
      };

      return (
        <div>
          <h2>Componente de Eventos</h2>
          <button onClick={handleClick}>Clique aqui</button>
        </div>
      );
    }

    export default EventComponent;
    ```

---

## Exercícios - Postar no AVA

1.  **O que são os componentes do React.js?**
2.  **O que existe dentro do retorno da função de um componente?**
3.  **Onde um componente pode ser utilizado?**
4.  **Cite os dois procedimentos para utilização de um componente.**
5.  **Qual a denominação dada a um componente que chama outro?**
6.  **Qual a denominação dada a um componente que é chamado por outro?**
