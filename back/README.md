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