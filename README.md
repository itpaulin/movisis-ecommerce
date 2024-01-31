# Teste técnico MOVISIS

## Descrição

Este projeto é um mini ecommerce construído com TypeScript, React, NextJS, ContextAPI, TailwindCSS, Shadcn UI, Prisma ORM, PostgreSQL e Supabase. Ele apresenta um carrinho funcional, checkout, exibição de produtos e a possibilidade de filtrar e ordená-los. O projeto é 100% responsivo.

## Instalação e Uso com Docker - (Principal opção)

1. Clone o repositório para a sua máquina local.
2. Na raiz do projeto, você encontrará um arquivo Dockerfile. Você receberá um arquivo docker-compose.yml separadamente com as variáveis de ambiente e configurações necessárias.
3. Construa a imagem e inicie o container Docker com o comando `docker compose up -d`
4. Acesse a aplicação em `http://localhost:3000`

## Instalação e Uso sem Docker

### Gerenciador de Pacotes

Este projeto usa o [PNPM](https://pnpm.io/) como gerenciador de pacotes padrão.
Você deve instala-lo com o seguinte comando:

```bash
npm install -g pnpm
```

Após isso :

1. Clone o repositório para a sua máquina local.
2. Na raiz do projeto, digite no terminal `pnpm install`.
3. Coloque o arquivo chamado '.env' recebido por e-mail no diretório raiz do projeto.
4. Execute o comando para criar a conexão com banco de dados `pnpm prisma generate`
5. Inicie a aplicação, `pnpm dev`
6. Acesse a aplicação em `http://localhost:3000`

## Tecnologias Utilizadas

- **TypeScript**: Usado como a principal e única linguagem de programação.
- **React**: Framework javascript usado para construir interfaces web.
- **NextJS**: Um framework React que oferece renderização do lado do servidor (SSR), App Router, etc...
- **ContextAPI**: Usado para gerenciar o estado da aplicação.
- **TailwindCSS**: Usado para estilização, atuando como um pré-processador CSS.
- **Shadcn UI**: Usado para componentes de UI.
- **Prisma ORM**: Usado para gerenciar, popular e acessar o banco de dados.
- **PostgreSQL**: Usado como o banco de dados principal.
- **Supabase**: Usado para hospedagem do banco de dados.

## Funcionalidades

- **Carrinho**: O carrinho cumpre todas as finalidades.
- **Checkout**: O checkout cumpre todas as finalidades.
- **Exibição de Produtos**: Os produtos são exibidos e os usuários têm a possibilidade de filtrar e ordená-los.
- **Responsividade**: O projeto esta responsivo para dispositivos mobile e desktop.
