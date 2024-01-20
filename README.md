# Avaliação prática - Fullstack Web Varejo 360

Esta avaliação tem por objetivo avaliar sua capacidade de desenvolver um sistema do zero, utilizando um conjunto de tecnologias pré-definidas.

## Descrição do sistema

Você implementará o sistema **CATÁLOGO DE LEITE**.

Nesse sistema, o usuário pode buscar os produtos informando:
- o início do código do produto ou
- parte do nome do produto

Após a busca, o sistema apresenta em uma tabela todos os produtos que atenderam ao filtro. Essa tabela deve exibir 10 itens por página.

Dentro da tabela, deve haver uma coluna com um botão para a exclusão daquele item.

O usuário também pode cadastrar um novo produto, informando o código e o nome. Para o cadastro, é essencial garantir que o código do produto é único.

Toda vez que um cadastro é concluído com sucesso, a tabela de resultado da busca deve ser atualizada.

Abaixo, temos um mock desse sistema e um vídeo explicando como funciona a interação do usuário com o sistema.

**Vídeo explicativo:** https://share.vidyard.com/watch/4kqLwuEqbA4QcB7Bnud3wP

**Mock:** https://www.figma.com/proto/3EBOfV1Pcby3fsWqQppiwk/Cat%C3%A1logo-do-Leite?node-id=20%3A109&scaling=min-zoom

## Requisitos técnicos

O sistema deve ser um website com uma API REST.

O frontend deve ser implementado em React (utilizar hooks). 

A API REST (backend) deve ser implementado em Kotlin ou Java, utilizando Spring Boot 3.2.1 ou superior. 

O sistema deverá se conectar a um banco de dados PostgreSQL, que deve ser inicializado em um container local na máquina.

A paginação deverá ser implementada no front-end e no back-end.

A busca com filtro vazio deve exibir todos os dados disponíveis.

Adicionar roteamento no React.


## Requisitos extra

Segue abaixo uma lista de requisitos extra do sistema. Eles são pontos que, apesar de serem extras, tem grande importância na avaliação.

1. Implementar a ordenação na tabela. O usuário pode escolher a ordenação clicando no cabeçalho da tabela
2. Permitir que o usuário edite a descrição de um produto
3. Adicionar controle de acesso (tela de login e permissão para acessar os serviços da API)
4. Criar um conjunto de testes de controller (3 casos de teste, no mínimo) utilizando MockMVC
5. Criar Dockerfile para construir a imagem do servidor, adicionar as instruções de criação e execução da imagem do container no README


## Instruções

Para a implementação do sistema, crie um fork desse repositório e adicione todo o código nesse fork. Ao fim, convide o usuário `v360-eduardo-marques` para o repo.


## Avaliação

Além do funcionamento do sistema, será avaliada a organização do código, comentários e a identidade visual do sistema.


## Instruções para construção (build) e execução (run) do frontend

# PARA RODAR O PROJETO

Após ter clonado o repositório

## Requisitos

- Ter o Node instalado
- Ter o nmp instalado (gerenciador de pacotes)

## Fazer os seguintes comandos

* para instalar dependencias
```bash
npm install
```
* inicia o servidor de desenvolvimento do seu projeto
```bash
npm run dev
```
* cria uma versão de produção do seu aplicativo
```bash
npm run build
```
* instala globalmente uma ferramenta chamada serve. serve é um servidor estático simples que pode ser usado para servir seu aplicativo web em um ambiente local ou de produção
```bash
npm install -g serve
```
*  Finalmente, este comando inicia o servidor serve e serve o conteúdo do diretório dist.
```bash
serve -s dist
```

## Instruções para construção (build) e execução (run) do backend

# PROJETO BACKEND

Antes de começar, certifique-se de que o seguinte esteja instalado em sua máquina:

-Java JDK

-Maven

# Construção (Build) do Projeto com Maven

1-Abra o Terminal ou Prompt de Comando.

2-Navegue até o diretório do projeto. Este é o local onde o arquivo pom.xml está localizado.

3-Execute o comando Maven para construir o projeto. Isso compilará seu código e criará um arquivo JAR executável.

```bash
mvn clean install
```
*`clean` remove a pasta `target` e seus conteúdos para garantir uma build limpa.

*`install` compila o projeto e instala o pacote no repositório local do Maven, pronto para ser usado como uma dependência em outros projetos.

# Execução (Run) do Projeto com Spring Boot

Após construir o projeto, você pode executar a aplicação Spring Boot.

1-Localize o arquivo JAR gerado. Ele deve estar na pasta target dentro do diretório do seu projeto.

2-Execute a aplicação usando o Java. Substitua `seu-arquivo.jar` pelo nome do arquivo JAR gerado.

```bash
java -jar target/seu-arquivo.jar
```

# Execução Direta com o Maven

Se você deseja executar a aplicação diretamente sem passar por uma build separada, pode usar o plugin do Spring Boot com Maven:

Este comando compila e executa a aplicação diretamente. É útil durante o desenvolvimento para testes rápidos.

```bash
mvn spring-boot:run
```

# Observação IMPORTANTE

O CORS está configurado para requisições de origem `http://localhost:5173` e `http://localhost:3000`


## Instruções para construção (build) e execução (run) do projeto com o Docker

## Pré-requisitos

Antes de começar, você precisa ter o Docker e o Docker Compose instalados em sua máquina. Se não os tiver, você pode baixá-los e instalá-los a partir dos seguintes links:

- Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)
- Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Configuração

Montar um arquivo .env aos moldes de .env.example e preencher as variáveis de ambiente.

## Construindo e Executando o Projeto

Para construir e executar o projeto com Docker Compose, siga estes passos:

1. **Construir os Containers**

    No diretório raiz do seu projeto, onde o arquivo `docker-compose.yml` está localizado, execute o seguinte comando:

    ```
    docker-compose build
    ```

    Este comando irá construir as imagens para o `frontend` e o `backend` com base nas instruções encontradas nos respectivos `Dockerfiles`.

2. **Executar os Containers**

    Após a construção das imagens, você pode iniciar os containers com o comando:

    ```
    docker-compose up
    ```

    Para executar em modo 'detached' (em segundo plano), use:

    ```
    docker-compose up -d
    ```

3. **Acessar a Aplicação**

    Após os containers estarem em execução, você pode acessar a aplicação frontend e backend nos endereços especificados no arquivo `docker-compose.yml`.

## Parando os Containers

Para parar os containers, você pode usar o seguinte comando: 
    
    ```
    docker-compose down
    ```


