# Avaliador de Livros API

## Requisitos para executar o projeto
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Node.js e npm (instalado junto com Node.js)

## Instalação

### Passo 1: Clonar o Repositório

Clone o repositório para sua máquina local usando o comando abaixo:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
```

###  Passo 2: Instalar Docker Desktop
Se ainda não tiver o Docker Desktop instalado, baixe e instale a partir do site oficial.

###  Passo 3: Baixar as dependências do projeto
Para baixar as dependências do projeto, execute o comando abaixo:
```sh
npm install
```

###  Passo 4: Iniciar o Docker Compose
Para iniciar o Docker Compose, execute o comando abaixo:
```sh
docker-compose up -d
``` 
###  Passo 5: Gerar as migrate e seed no prisma
Para gerar as migrate e seed no prisma, execute o comando abaixo:
```sh
npx prisma migrate dev
npx prisma db seed
```

###  Passo 5: Acessar a aplicação
Para executar o projeto, execute o comando abaixo:
```sh
npm run dev
```
### Para acessar a Documentação da API
Para acessar a documentação da API, execute o comando abaixo:
```sh
http://localhost:3000/docs
```
## Requisitos Funcionais (RF)
- [x] **RF00** - Deve ser possível autenticar na plataforma com credenciais. - **alta**
- [x] **RF01** - Deve ser possível autenticar na plataforma com Google. - **Alta**
- [ ] **RF02** - Deve ser possível autenticar na plataforma com Facebook. - **Baixa**
- [ ] **RF03** - Deve ser possível entrar na plataforma sem estar autenticado. - **Média**
- [ ] **RF04** - Deve ser possível se autenticar a qualquer momento da aplicação. - **Alta**
- [ ] **RF05** - Deve ser possível se desautenticar. - **Média**
- [x] **RF06** - Deve ser possível avaliar  livro. - **Alta**
- [ ] **RF07** - Deve ser possível listar todas as avaliações por ordem de data. - **Baixa**
- [ ] **RF08** - Deve ser possível a própria avaliação do usuário estar sempre em primeiro lugar se ele estiver autenticado. - **Baixa**
- [ ] **RF09** - Deve ser possível criar um post. - **Médio**
- [ ] **RF10** - Deve ser possível editar um post. - **Médio**
- [ ] **RF11** - Deve ser possível listar todas as postagens. - **Alta**
- [ ] **RF12** - Deve ser possível listar os livros mais populares. - **Baixo**
- [x] **RF13** - Deve ser possível visualizar um perfil de usuário se já estiver autenticado. - **Baixo**
- [ ] **RF14** - Deve ser possível visualizar a quantidade de livros lidos do usuário se já estiver autenticado. - **Baixo**
- [ ] **RF15** - Deve ser possível visualizar a quantidade de autores lidos do usuário se já estiver autenticado. - **Baixo**
- [ ] **RF16** - Deve ser possível visualizar a quantidade de páginas lidas do usuário se já estiver autenticado. - **Baixo**
- [ ] **RF17** - Deve ser possível visualizar a categoria mais lida se já estiver autenticado. - **Baixo**
- [ ] **RF18** - Deve ser possível acessar detalhes de um produto. - **Médio**
- [ ] **RF19** - Deve ser possível acessar todos os comentários desse produto. - **Baixo**
- [ ] **RF20** - Deve ser possível o usuário avaliar um livro através de um range de avaliação de 1 a 5. - **Alto**
- [ ] **RF21** - Deve ser possível o usuário avaliar um livro através de um comentário. - **Médio**

## Requisitos Não Funcionais (RNF)

- [ ] **RNF01** - A autenticação deve ser rápida e segura.
- [ ] **RNF02** - O sistema deve ser responsivo e funcionar em diferentes dispositivos.
- [ ] **RNF03** - O sistema deve suportar um grande número de acessos simultâneos.
- [ ] **RNF04** - Os dados dos usuários devem ser armazenados de forma segura.
- [ ] **RNF05** - O sistema deve ter um tempo de resposta inferior a 2 segundos para todas as operações.

## Regras de Negócio (RN)

- [ ] **RN01** - Apenas usuários autenticados podem avaliar livros.
- [ ] **RN02** - Apenas usuários autenticados podem visualizar perfis de outros usuários.
- [ ] **RN03** - Apenas usuários autenticados podem criar e editar posts.
- [ ] **RN04** - A própria avaliação do usuário deve estar sempre em primeiro lugar na lista de avaliações.
- [ ] **RN05** - A avaliação de livros deve ser feita através de um range de 1 a 5 e/ou através de um comentário.
