## 1. O que é o React Router?

`react-router-dom` é uma biblioteca que possibilita a navegação entre diferentes páginas e componentes em uma aplicação React. Cada página ou componente acessível é associado a uma "rota" específica. Por exemplo, ao acessar a rota `"/products"`, o usuário é direcionado para o componente correspondente a essa rota.

## 2. Instalação e Configuração Inicial

Para começar a usar o React Router, siga estes passos:

1.  **Crie uma nova aplicação React** (usando Vite, por exemplo):
    ```bash
    npm create vite@latest
    ```
2.  **Instale a biblioteca**:
    ```bash
    npm i react-router-dom
    ```
3.  **Configure as rotas** no seu arquivo `main.jsx`:

    ```jsx
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';
    import { createRoot } from 'react-dom/client';
    import { StrictMode } from 'react';
    import App from './App';
    import ErrorPage from './routes/ErrorPage'; // Exemplo de página de erro

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
    ]);

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
    ```

## 3. Adicionando Novas Rotas

O método `createBrowserRouter` utiliza um array de objetos, onde cada objeto define uma rota.

* `path`: Contém a URL da rota.
* `element`: Contém o componente a ser renderizado para essa rota.

Como boa prática, os componentes de rota são criados dentro de uma pasta `src/routes`.

**Exemplo de adição de uma rota `/products`**:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />, // Componente para a rota de produtos
  },
]);
````

## 4\. Página de Erro

Para lidar com rotas inválidas, você pode criar um componente de página de erro e configurá-lo na propriedade `errorElement` do seu router.

**Exemplo de um componente `ErrorPage.jsx`**:

```jsx
export default function ErrorPage() {
  return (
    <div>
      <h3>Erro ocorrido!</h3>
      <p>Temos um problema.</p>
    </div>
  );
}
```

## 5\. Reaproveitamento de Estrutura (Layout com Outlet)

Para reutilizar layouts como `Navbar` e `Footer` em várias páginas, o `react-router-dom` oferece o componente `<Outlet />`.

1.  **Configure rotas aninhadas** usando a propriedade `children` no `main.jsx`.
2.  **Use o `<Outlet />`** no componente pai (como `App.jsx`) para renderizar os componentes filhos.

**Configuração em `main.jsx`**:

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);
```

**Uso do `<Outlet />` em `App.jsx`**:

```jsx
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar'; // Exemplo de Navbar
import Footer from './components/Footer'; // Exemplo de Footer

function App() {
  return (
    <>
      <p>Navbar</p>
      <Outlet /> {/* Os componentes filhos (Home, Products) serão renderizados aqui */}
      <p>Footer</p>
    </>
  );
}

export default App;
```

## 6\. Navegação entre Rotas com `<Link>`

Para criar links de navegação, utilize o componente `<Link>` do `react-router-dom` em vez da tag `<a>` tradicional. Isso evita o recarregamento da página.

**Exemplo de um componente de `NavBar`**:

```jsx
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <span style={{ padding: '8px' }}>
        <Link to={'/'}>Home</Link>
      </span>
      <span style={{ padding: '8px' }}>
        <Link to={'/products'}>Produtos</Link>
      </span>
    </div>
  );
}

export default NavBar;
```

## 7\. Rotas Dinâmicas

É possível criar rotas com parâmetros variáveis, como o ID de um produto. A sintaxe utiliza dois pontos (`:`) seguidos pelo nome do parâmetro (ex: `:id`).

**Exemplo de configuração de rota dinâmica**:

```jsx
{
  path: '/editar-produto/:id',
  element: <EditForm />
}
```

### Rotas Aninhadas e `useParams`

Rotas aninhadas combinam rotas dinâmicas com informações adicionais (ex: `/products/:id/info`). Para acessar o parâmetro dinâmico (como o `:id`) dentro do componente, utilize o hook `useParams`.

**Exemplo de uso do `useParams`**:

```jsx
import { useParams } from 'react-router-dom';

function Info() {
  const { id } = useParams();
  return (
    <div>
      Informações sobre o produto {id}
    </div>
  );
}
```

## 8\. Link Ativo com `<NavLink>`

Para destacar o link da página atualmente ativa (por exemplo, em um menu), utilize o componente `<NavLink>` no lugar do `<Link>`. Ele possui uma propriedade `isActive` que permite aplicar estilos condicionalmente.

**Exemplo de `NavBar` com `<NavLink>`**:

```jsx
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Arquivo com a classe .active

function NavBar() {
  return (
    <div>
      <span>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
      </span>
      <span>
        <NavLink to={'/products'} className={({ isActive }) => (isActive ? 'active' : '')}>
          Produtos
        </NavLink>
      </span>
    </div>
  );
}
```

**Exemplo de CSS para o link ativo**:

```css
.active {
  color: red;
  font-weight: 900;
}
```

## 9\. Redirecionamento Programático com `useNavigate`

Para redirecionar o usuário após uma ação (como o envio de um formulário), utilize o hook `useNavigate`.

**Exemplo de redirecionamento após uma requisição HTTP**:

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // ...lógica da requisição...
    const res = await fetch(...);

    if (res.status === 201) { // Ex: Recurso criado com sucesso
      navigate('/'); // Redireciona para a página inicial
    }
  };

  // ...resto do componente...
}
```
