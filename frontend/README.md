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