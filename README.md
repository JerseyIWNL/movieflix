# MovieFlix Analytics

Este projeto foi desenvolvido com o objetivo de simular uma plataforma simples de streaming de filmes, permitindo o cadastro e avaliação de filmes, além de implementar um fluxo de dados com Data Lake, Data Warehouse e Data Mart para análise de informações.

---

## Descrição do Projeto

A aplicação permite que usuários cadastrem filmes e realizem avaliações. Além disso, os dados gerados são utilizados em um processo analítico separado, onde são organizados e consultados para gerar insights.

O projeto também contempla o uso de containers com Docker, configuração de proxy reverso com Nginx e automação de build e deploy utilizando GitHub Actions.

---

## Tecnologias utilizadas

- Node.js (backend)
- HTML, CSS e JavaScript (frontend)
- Docker
- Docker Compose
- Nginx
- PostgreSQL
- GitHub Actions

---

## Como executar o projeto

Primeiro, clone o repositório:

```bash
git clone https://github.com/jerseyiwnl/movieflix.git
cd movieflix

Em seguida, execute os containers:

docker compose up --build

Após subir os serviços, a aplicação estará disponível em:

http://localhost:8080

Estrutura do projeto

O projeto está dividido em duas partes principais:

Aplicação web:

Responsável pelo cadastro e avaliação de filmes
Backend em Node.js
Frontend simples com HTML, CSS e JavaScript
Nginx atuando como proxy reverso

Pipeline de dados:

Data Lake com arquivos CSV
Data Warehouse com PostgreSQL
Data Mart com consultas analíticas
Data Lake

O Data Lake é composto por arquivos CSV contendo dados brutos:

movies.csv
users.csv
ratings.csv

Esses arquivos estão armazenados na pasta data e representam a base inicial de dados.

Data Warehouse

Os dados do Data Lake foram carregados em um banco PostgreSQL, onde foram organizados em tabelas estruturadas:

movies
users
ratings

Esse ambiente permite consultas mais organizadas e eficientes.

Data Mart

O Data Mart foi implementado por meio de consultas SQL que geram informações relevantes para análise.

Abaixo estão alguns exemplos de consultas utilizadas:

Top filmes mais populares:

SELECT m.title, COUNT(r.rating) AS total_avaliacoes
FROM movies m
JOIN ratings r ON m.id = r.movie_id
GROUP BY m.title
ORDER BY total_avaliacoes DESC
LIMIT 5;

Gênero com melhor média de avaliação:

SELECT m.genre, AVG(r.rating) AS media
FROM movies m
JOIN ratings r ON m.id = r.movie_id
GROUP BY m.genre
ORDER BY media DESC;

País com maior número de avaliações:

SELECT u.country, COUNT(r.rating) AS total
FROM users u
JOIN ratings r ON u.id = r.user_id
GROUP BY u.country
ORDER BY total DESC;

Como forma de comprovação, os resultados dessas consultas podem ser apresentados por meio de prints, execução no banco ou exportação para arquivos CSV.

CI/CD

Foi configurado um pipeline utilizando GitHub Actions que realiza automaticamente:

Build da imagem Docker
Teste da aplicação
Publicação da imagem no Docker Hub

O workflow está disponível na pasta:

.github/workflows

Considerações finais

O projeto atende aos requisitos propostos, contemplando tanto a parte de desenvolvimento da aplicação quanto a simulação de um ambiente de dados para análise.

A solução foi desenvolvida de forma simples, priorizando clareza e funcionamento, sem adicionar complexidade desnecessária.