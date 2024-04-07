# Guilherme Durães Pereira - Prova - Estágio Back-End SmartNX

# Contexto:
Este repositório contém os exercícios do um ao doze requeridos na prova prática para a vaga de estágio em Back-end da SmartNX. Além disso, contém uma API simples em Node.js no padrão RESTful para listagem de posts e comentários, API esta também requerida na prova.

# Habilidades pessoais trabalhadas:
- Por mais que eu já possua alguma experiência em criar APIs, a prática sempre traz novos desafios e aprendizados, o que é essencial para nós desenvolvedores. Dessa forma, conseguimos nos manter atualizados e buscar melhorias em nossos códigos.

# Funcionalidades Inclusas:
- e1.js: Função que recebe dois parâmetros do tipo string e retorna o de maior comprimento;
- e2.js: Função que recebe três parâmetros: uma função e duas strings, e aplica a função recebida como parâmetro nas duas strings, imprimindo o resultado;
- e3.js: Função que recebe uma quantidade indefinida de parâmetros do tipo string e imprime todos juntos;
- e4.js: Função que recebe uma string da escolha do usuário e substitui todas as ocorrências de números presentes nessa string por outro valor definido pelo usuário;
- e5.js: Função que recebe uma string da escolha do usuário e a modifica com base em um dicionário escolhido pelo usuário também;
- e6.js: Função que realiza uma requisição do tipo GET utilizando um CEP à escolha do usuário para a API da ViaCEP (https://viacep.com.br/), e imprime o endereço do CEP utilizado no formato 'ENDERECO, BAIRRO, CIDADE/ESTADO';
- e7.js: Função que recebe um array de objetos e imprime uma mensagem de saudação para cada um dos objetos, colocando a primeira letra em maiúscula;
- e8.js: Função que recebe um array de objetos e imprime o valor da soma das idades desses objetos;
- e9.js: Função que recebe um array de objetos e imprime o array inteiro caso nele contenha alguém com a idade menor que vinte e cinco anos;
- e10.js: Função que recebe um array de objetos e imprime todos os objetos em que a idade seja menor que trinta anos;
- e11.js: Função que recebe um array de objetos e retorna o mesmo array ordenado em ordem decrescente por idade dos objetos. Em caso de empate, o desempate é feito pelo id de forma decrescente também;
- e12.js: Função que recebe um objeto e exclui uma chave à escolha do usuário desse objeto;
- API: API com endpoints para cadastrar novos posts, obter todos os posts ou obter um post pelo ID do mesmo, apagar um post pelo ID, adicionar um comentário a um post, apagar um comentário de um post;

# Tecnologias usadas:
Exercícios:
Lint, Axios, JavaScript.

API:
Node.JS, JavaScript, Express.js.

DB: 
MySQl,Sequelize.

# Configurando a aplicação na sua maquina:
- Clone o repositório em um diretório de sua escolha com `git clone git@github.com:EuGuiXtd/Estagio-Back-End-SmartNX.git`. Em seguida, navegue até o diretório contendo o projeto com `cd Estagio-Back-End-SmartNX`;
- Baixe as dependências necessárias com `npm install`. ***Obs: caso se depare com um erro ao executar o comando npm install, tente mudar sua versão do Node para uma versão igual ou superior a 15.14.0. Para fazer essa mudança, basta executar o comando `nvm use node`. Esse comando fará com que o Node utilize a versão mais recente que esteja instalada em seu computador. Se a última versão instalada em seu computador for menor do que a requerida, execute o comando `nvm install node` para baixar a versão mais recente do Node e começar a usá-la imediatamente***;
- Para o funcionamento da API, certifique-se de ter o MySQL rodando localmente em sua máquina ou em algum container do Docker. Caso deseje usar um container para rodar o MySQL, basta executar o comando `docker container run --name nome-do-container -e MYSQL_ROOT_PASSWORD=senha_mysql -d -p 3306:3306 mysql:8.0.29`. Este comando irá criar e iniciar um container com o MySQL, onde o host será "localhost" ou "127.0.0.1". Além disso, a parte MYSQL_ROOT_PASSWORD=senha_mysql está definindo um usuário "root" e a senha como "senha_mysql". Caso queira mudar isso, basta alterar os nomes. Por fim, este comando tentará rodar na porta 3306 de sua máquina, como é possível ver no comando. Caso deseje mudar essa porta, basta substituir o primeiro "3306" do comando por uma porta de sua escolha;
- Após garantir que há uma instância do MySQL rodando localmente ou em um container, você precisará configurar as variáveis de ambiente que se encontram no arquivo .env.example na pasta raiz da aplicação.Para começar mude o nome do arquivo de ".env.example" para ".env", após isso configure as variaveis de ambiemte."MYSQL_USER" é o usuário de conexão de sua instância MySQL, "MYSQL_PASSWORD" é a senha para conectar à sua instância MySQL, "MYSQL_DATABASE" é o nome do banco de dados que será criado, este nome é escolhido pelo usuário, "MYSQL_HOST" é o host para conectar à sua instância MySQL, "MYSQL_PORT" é a porta em que sua instância MySQL está sendo executada e, por fim, "SERVER_PORT" é a porta em que o servidor Express irá rodar em sua máquina ***Obs: caso não preencha esta variável de ambiente, o servidor irá rodar por padrão na porta 3001**;
- Agora, com tudo configurado, basta criar o banco de dados e iniciar o servidor Express. Para criar o banco de dados, basta executar o comando `npm run db` e para iniciar o servidor, basta executar o comando `npm start`.***Obs: o comando `npm run db` irá executar uma sequência de comandos, que são eles: `npx sequelize db:create`, responsável por criar o banco de dados; `npx sequelize db:migrate`, que cria as tabelas do banco de dados; e `npx sequelize db:seed:all`, que popula as tabelas do banco de dados**

# Testando os Exercicios:
- Antes de testar os exercícios ou os endpoints, certifique-se de ter seguido todos os passos de configuração descritos anteriormente;
- Para testar os exercícios de um a doze, basta executar em seu terminal, na pasta raiz do projeto, o comando `node nome-do-arquivo.js`. Por exemplo: node e1.js. Este comando executará o primeiro exercício.

# Testando os endpoints da API:
- Antes de testar os exercícios ou os endpoints, certifique-se de ter seguido todos os passos de configuração descritos anteriormente;
- Para testar os endpoints, basta enviar a requisição para o endpoint que deseja testar. Para facilitar, aqui vai uma lista dos endpoints disponíveis na API.

# Endpoints disponiveis na API:
## Endpoints de posts:
- Lembrando que todos os endpoints começam com "http://localhost:3001", onde o número 3001 é a porta onde o servidor Express está rodando em sua máquina. Caso ele esteja rodando em outra porta, lembre-se de trocar esse número no endpoint;
- Endpoint que aceita uma requisição do tipo GET para obter todos os posts. A URL do enpoint é `http://localhost:3001/posts`. Esta requisição irá retornar todos os posts existentes no banco de dados;
- Endpoint que aceita uma requisição do tipo GET para obter apenas um post pelo seu ID específico. A URL do endpoint é `http://localhost:3001/posts/:postId` ***Obs: A parte em que está escrito ":postId" deve ser substituída pelo número do ID do post que você deseja encontrar. Por exemplo, `http://localhost:3001/posts/1` irá retornar o post com o ID 1***.Esta requisição irá retornar como resposta o post com o ID que você passou no endpoint;
- Endpoint que aceita uma requisição do tipo POST para cadastrar um novo post. A URL do endpoint é `http://localhost:3001/posts` ***Obs: Esta requisição exige um corpo (body) contendo um objeto seguindo o seguinte modelo:
```
     {  
  "user": "string",
  "title": "string",
  "text": "string"
     }
```
,onde todas essas chaves são obrigatórias para a criação do novo post***.Após adicionar um novo post, esta requisição irá retornar todos os posts existentes no banco de dados;
- Endpoint que aceita uma requisição do tipo DELETE para deletar um post existente pelo seu ID específico. A URL do enpoint é `http://localhost:3001/posts/:postId` ***Obs: A parte em que está escrito ":postId" deve ser substituída pelo número do ID do post que você deseja remover. Por exemplo, `http://localhost:3001/posts/1` irá remover o post com o ID 1***.Após excluir um post, esta requisição irá retornar como resposta todos os posts existentes no banco de dados.

## Endpoints de comments:
- Lembrando que todos os endpoints começam com "http://localhost:3001", onde o número 3001 é a porta onde o servidor Express está rodando em sua máquina. Caso ele esteja rodando em outra porta, lembre-se de trocar esse número no endpoint;
- Endpoint que aceita uma requisição do tipo POST para cadastrar um novo comentário em um post específico. A URL do enpoint é `http://localhost:3001/posts/:postId/comments` ***Obs: Esta requisição exige um corpo (body) contendo um objeto seguindo o seguinte modelo:
```  
     {
  "user": "string",
  "text": "string"
     }
```
,onde apenas a chave "text" é obrigatória para cadastrar um novo comentário em um post. Caso o usuário queira publicar um comentário anônimo, a chave "user" pode ser omitida. Além disso, onde está escrito ":postId" deve ser substituído pelo número do ID do post em que você deseja adicionar o seu comentário. Por exemplo, `http://localhost:3001/posts/1/comments` irá adicionar um comentário ao post com ID igual a 1***.Essa requisição irá retornar como resposta o post ao qual você adicionou o comentário;
- Endpoint que aceita uma requisição do tipo DELETE para deletar um comentário existente em um post específico. A URL do enpoint é `http://localhost:3001/posts/:postId/comments/:commentId` ***Obs: A parte em que está escrito ":postId" deve ser substituída pelo número do ID do post em que você deseja remover o comentário, e onde está escrito ":commentId" deve ser substituído pelo ID do comentário que você deseja excluir no post selecionado. Por exemplo, `http://localhost:3001/posts/1/comments/1` irá excluir o comentário com ID 1 no post com ID 1***.Essa requisição irá retornar como resposta o post do qual você removeu o comentário.

# Obrigado por ler até aqui!
Fico extremamente grato por conferir meu projeto! Espero que tenha gostado. Se tiver alguma dúvida ou sugestão, não hesite em me contatar.

Atenciosamente,

Guilherme Durães Pereira
