## Protocolos de Comunicação: HTTP

O **Hyper Text Transfer Protocol (HTTP)** é o protocolo que permite o intercâmbio de informações pela internet. Ele funciona em um modelo Cliente-Servidor:

1.  O **Client** (Cliente, ex: Navegador) envia um **HTTP Request** (Requisição HTTP).
2.  O **Server** (Servidor) processa a requisição e retorna um **HTTP Response** (Resposta HTTP).

### Características Principais

* **Independente da Plataforma:** O HTTP não depende da plataforma de desenvolvimento utilizada, sendo compatível com Java, PHP, .NET, iOS, Android, etc.
* **Suporte Universal:** É suportado por todos os navegadores web, como Google Chrome, Mozilla Firefox, e Microsoft Edge.
* **Baseado em Requisição/Resposta:** Todo o fluxo de comunicação funciona com base em requisições e respostas.

---

## Métodos de Requisições HTTP

Os métodos HTTP definem a ação que se deseja realizar sobre um recurso.

* **`GET`**: Utilizado para solicitar (buscar) informações.
* **`POST`**: Utilizado para enviar (criar) informações.
* **`PUT`**: Utilizado para atualizar *todos* os campos de um recurso.
* **`PATCH`**: Utilizado para atualizar *apenas alguns* campos de um recurso.
* **`DELETE`**: Utilizado para apagar (deletar) informações.

---

## Códigos de Resposta HTTP (Status Codes)

Os códigos de resposta indicam se uma requisição HTTP foi concluída com sucesso ou se ocorreu um erro.

* **`200 OK`**: A requisição foi recebida com sucesso.
* **`201 OK (Enviado com Sucesso)`**: A requisição foi bem-sucedida e um novo recurso foi criado.
* **`400 Bad Request`**: A requisição é inválida (ex: sintaxe incorreta).
* **`404 Not Found`**: O recurso solicitado não foi encontrado.
* **`500 Internal Server Error`**: Ocorreu um erro interno no servidor.

Para uma lista completa, consulte a documentação da MDN: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

## Prática: JSON Server e Persistência de Dados

### Instalação do JSON Server

O `json-server` é usado para simular um backend.

1.  **Instalação (via npm):**
    ```bash
    npm i json-server
    ```

2.  **Configuração (`package.json`):**
    Adicione o script "server" ao seu `package.json`:
    ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "lint": "eslint . --ext js,jsx --report-unused",
      "preview": "vite preview",
      "server": "json-server --watch data/db.json"
    }
    ```

3.  **Criação do Banco de Dados:**
    Crie uma pasta `data` fora do diretório `src` e, dentro dela, crie o arquivo `db.json`. Cada array dentro deste arquivo será um endpoint.

4.  **Execução:**
    * Rode o projeto (ex: Vite): `npm run dev`
    * Em um novo terminal, rode o JSON Server: `npm run server`

### Prática: Persistência de Dados em React

O objetivo é adaptar o formulário e a tabela da aplicação para integrar com a API do `json-server`.

#### 1. Estados e URL da API

```javascript
function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [edit, setEdit] = useState(false);

  const url = 'http://localhost:3000/products';
  
  // ...
````

#### 2\. Listar Todos os Produtos (GET)

Usamos `useEffect` para buscar a lista de produtos.

```javascript
  useEffect(() => {
    // Lista todos os produtos:
    const getProductsList = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    getProductsList();
  }, []);
```

#### 3\. Buscar Produto por ID (GET by ID)

Função para carregar os dados de um produto no formulário para edição.

```javascript
  const getProductById = async (id) => {
    // Faz a requisição http
    const res = await fetch(url + `/${id}`);
    const data = await res.json();

    // Carrega os dados no formulário para edição:
    setName(data.name);
    setPrice(data.price);
    setStock(data.stock);
    setId(data.id);

    // Habilita edição:
    setEdit(true);
  }
```

#### 4\. Salvar Produto (POST / PUT)

Função que trata a criação (`POST`) ou atualização (`PUT`) de um produto, com base no estado `edit`.

```javascript
  const saveProduct = async (e) => {
    e.preventDefault();

    const saveRequestParams = {
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, price, stock })
    }

    // Cria url para buscar todos ou apenas um produto
    const save_url = edit ? url + `/${id}` : url;

    // Faz a requisição http
    const res = await fetch(save_url, saveRequestParams);

    // Se for cadastro de produto novo:
    if (!edit) {
      const newProduct = await res.json();
      // Atualização da tabela:
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }

    // Se for edição/atualização de produto já cadastrado:
    if (edit) {
      const editedProduct = await res.json();
      // Atualização da tabela:
      const editedProductIndex = products.findIndex(prod => prod.id === id);
      products[editedProductIndex] = editedProduct;
      setProducts(products);
    }

    clearForm();
    setEdit(false);
  }
```

#### 5\. Deletar Produto (DELETE)

```javascript
  const deleteProduct = async (id) => {
    // Faz a requisição http
    const res = await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    });

    const deletedProduct = await res.json();

    // Atualização da tabela (filtrando o produto deletado):
    setProducts(products.filter(prod => prod.id !== deletedProduct.id));
  }
```

#### 6\. Funções Auxiliares

```javascript
  const clearForm = () => {
    setName("");
    setPrice("");
    setStock("");
  }

  // Mudança dos estados ao digitar no formulário:
  const handleName = (e) => { setName(e.target.value) };
  const handlePrice = (e) => { setPrice(e.target.value) };
  const handleStock = (e) => { setStock(e.target.value) };
}
```
