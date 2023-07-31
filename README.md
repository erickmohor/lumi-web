# Demo - YouTube
https://youtu.be/vgyPPFpO63Q


# Demo - Imagens
<p float="left">
<img src="https://github.com/erickmohor/lumi-web/blob/main/image_preview/preview_image1.png" alt="Tela Inicial de Login" width="800" height="500">

<img src="https://github.com/erickmohor/lumi-web/blob/main/image_preview/preview_image2.png" alt="Dashboard - Tela Inicial" width="800" height="500">

<img src="https://github.com/erickmohor/lumi-web/blob/main/image_preview/preview_image3a.png" alt="Dashboard - Tela de Faturas" width="800" height="500">

<img src="https://github.com/erickmohor/lumi-web/blob/main/image_preview/preview_image4.png" alt="Dashboard - Detalhes da Fatura 1" width="800" height="500">

<img src="https://github.com/erickmohor/lumi-web/blob/main/image_preview/preview_image5.png" alt="Dashboard - Detalhes da Fatura 2" width="800" height="500">

<img src="https://github.com/erickmohor/lumi-web/blob/main/image_preview/preview_image6.png" alt="Dashboard - Upload da Fatura em PDF" width="800" height="500">
</p>


# Descrição do projeto
Nesse projeto é possível fazer o upload de faturas de energia elétrica da CEMIG, em pdf, e é possível visualizar todos os dados de forma mais clara e objetiva. 

Ao acessar, é possível fazer o login ou cadastrar-se para ter acesso ao dashboard.
No dashboard contém a página principal, que fornece um resumo de dados obtidos através de todas as faturas já registradas no sistema por aquele usuário. E também possui a página de 'Faturas', onde é possível fazer o upload da fatura em pdf e visualizar todas as faturas registradas e seus dados.


# Funcionalidades
É possível:

## Usuário
- Cadastrar um usuário;
- Efetuar o login.

## Dashboard - Principal
- Obter resumos de acordo com as faturas já registradas no sistema por aquele usuário.

## Dashboard - Faturas
Nessa tela aparecem todas as faturas registradas pelo usuário.
Ao clicar em um item, é possível ver todas as informações detalhadas da fatura, como:
- Número do cliente;
- Número da instalação;
- Número da Nota Fiscal;
- Mês de referência;
- Data de Vencimento;
- Energia Elétrica (unidade, quantidade, preço unitário e valor total);
- Energia injetada HFP (unidade, quantidade, preço unitário e valor total);
- Energia comp. s/ ICMS (unidade, quantidade, preço unitário e valor total);
- Contrib. Ilum. Publica Municipal;
- Valor Total.

Além disso é possível fazer o upload de faturas em pdf da CEMIG. Cada fatura só pode ser registrada uma vez, evitando duplicidade de dados.


# Tech Stack
- **Frontend:** Next, Typescript
- **Backend:** Node, Fastify, Typescript, Prisma
- **Database:** PostgreSQL


# Dependências
Axios, Nookies, Tailwind CSS, Lucide React entre outros.


# Variáveis de ambiente
`NEXT_PUBLIC_API_URL` (URL do servidor backend)


# Para rodar localmente (frontend)
Clone o diretório
```bash
  git clone https://github.com/erickmohor/lumi-web
```

Vá no diretório do projeto
```bash
  cd lumi-web
```

Instale as dependências

```bash
  npm install
```

Com as variáveis de ambiente preenchidas, inicie o servidor

```bash
  npm run dev
```

** Observação: Para ter acesso as funcionalidades, é necessário executar o backend também. O backend se encontra em https://github.com/erickmohor/lumi-server