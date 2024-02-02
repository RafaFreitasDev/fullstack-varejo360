# Projeto Fullstack Web Varejo 360

Aplicação simples de cadastro e edição de produtos com autenticação de usuário. Frontend em ReactJs e Backend em Java Spring Boot. Projeto Dockerizado.

# Instruções para construção (build) e execução (run) do projeto com o Docker

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

    ```bash
    docker-compose build
    ```

    Este comando irá construir as imagens para o `frontend` e o `backend` com base nas instruções encontradas nos respectivos `Dockerfiles`.

2. **Executar os Containers**

    Após a construção das imagens, você pode iniciar os containers com o comando:

    ```bash
    docker-compose up
    ```

    Para executar em modo 'detached' (em segundo plano), use:

    ```bash
    docker-compose up -d
    ```

3. **Acessar a Aplicação**

    Após os containers estarem em execução, você pode acessar a aplicação frontend e backend nos endereços especificados no arquivo `docker-compose.yml`.

## Parando os Containers

Para parar os containers, você pode usar o seguinte comando: 

```bash
docker-compose down
```


## DEPLOY FRONT e BACK END

Existe uma organização clonando este repositório em 2 para fins de deploy.

    • Lembrando que a API está em um servidor gratuito e precisa de alguns segundos (talvez minutos) para “acordar”.

GIT_ORGANIZAÇÃO: https://github.com/vaga-fullstack-varejo360

DEPLOY_URL_FRONT: https://frontend-iota-eight-62.vercel.app/

DEPLOY_URL_BACK: https://varejodb.onrender.com
    

## Instruções para construção (build) e execução (run) do frontend

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

# Instruções para construção (build) e execução (run) do backend

Antes de começar, certifique-se de que o seguinte esteja instalado em sua máquina:

-Java JDK

-Maven

## Construção (Build) do Projeto com Maven

1-Abra o Terminal ou Prompt de Comando.

2-Navegue até o diretório do projeto. Este é o local onde o arquivo pom.xml está localizado.

3-Execute o comando Maven para construir o projeto. Isso compilará seu código e criará um arquivo JAR executável.

```bash
mvn clean install
```
*`clean` remove a pasta `target` e seus conteúdos para garantir uma build limpa.

*`install` compila o projeto e instala o pacote no repositório local do Maven, pronto para ser usado como uma dependência em outros projetos.

## Execução (Run) do Projeto com Spring Boot

Após construir o projeto, você pode executar a aplicação Spring Boot.

1-Localize o arquivo JAR gerado. Ele deve estar na pasta target dentro do diretório do seu projeto.

2-Execute a aplicação usando o Java. Substitua `seu-arquivo.jar` pelo nome do arquivo JAR gerado.

```bash
java -jar target/seu-arquivo.jar
```

## Execução Direta com o Maven

Se você deseja executar a aplicação diretamente sem passar por uma build separada, pode usar o plugin do Spring Boot com Maven:

Este comando compila e executa a aplicação diretamente. É útil durante o desenvolvimento para testes rápidos.

```bash
mvn spring-boot:run
```

## Observação IMPORTANTE

O CORS está configurado para requisições de origem `http://localhost:5173` e `http://localhost:3000`




