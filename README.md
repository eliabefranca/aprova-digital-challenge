## Desafio Aprova Digital

Este projeto utiliza [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/) e [TailwindCSS](https://tailwindcss.com/).

Na pasta ```/pages/api``` há uma rota de api onde estão sendo retornados os inputs.
Tomei a liberdade de adicionar mais algumas configurações nos campos dos inputs.

Instalando as dependências:

```bash
npm install
# or
yarn install
```

Rodando o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```


Gerando o build do projeto:

```bash
npm run build
# or
yarn build
```

Rodando os testes:

```bash
npm run test
# or
yarn test
```

Este projeto possui uma imagem do Docker e um arquivo docker-compose.yml configurado.
Caso você tenha o docker-compose instalado é só executar o comando:
```bash
docker-compose up
```
Ou se preferir executar com o docker, é só executar os comandos:
```bash
docker build . -t aprova-digital-challenge
docker run -p 3000:3000 aprova-digital-challenge
```
