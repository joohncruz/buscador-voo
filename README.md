# README #

Aplicação criada com intuito de criar um buscador de voo para a Maxmilhas.

### Sobre a Aplicação ###


Aplicação criada com intuito de criar um novo buscador de voo para a Maxmilhas.

Aplicação foi constituída utlizando o principio de mobile first, evitando ao maximo utilizar libs externas para auxilio do desenvolvimento.

Utilizado o framework react, considerando a componentização e enfase em programação funcional, para ajudar em uma escrita boa e padronizada foi utilizado o standart lint no projeto, foi criado uma estrutura para consumo de apis para falicitar e unificar as alterações quando necessarias (será possivel observar nos arquivos, core/ > config.js, api-access/api.js,  api-access/api-flight-price.js ). estrutura de CSS seguir padrao de desenvolvimento BEM, utilizando CSS variables e para criação do grid do app foi utilizado grid-layout, com isso aconselho abrir a aplicação no chrome ou no firefox, pois é um feature recente ainda nao atendida por completo em todos os navegadores.

Toda estrutura de webpack foi realizada manualmente para facilitar manutençao, para facilitar no desenvolvimento fiz o uso da bibilioteca react-hot-loader, pois apos alterar o arquivo automaticamente é feito um load da aplicação.

### Bibliotecas Utilizadas  ###

  axios
  react
  react-dom
  babel-core
  babel-eslint
  babel-loader
  babel-preset-es2015
  babel-preset-react
  babel-preset-stage-0
  react-hot-loader
  standard
  standard-loader
  webpack
  webpack-dev-server
  webpack-validator

### Como executar o projeto?  ###

Infelismente o grid-layout para a utilização do app para o desktop nao ficou pronto, solicito que abra em uma resolução inferior a 1023px.

Acesse a pasta raiz do projeto e execute os comandos abaixo: 

npm i -g webpack
npm i -g webpack-dev-server

npm install

Para inicializar a aplicação utilize o comando npm start e acesso o link local gerado http://localhost:3000/

npm start

### Obrigado! ###

Infelismente nao consegui aproveitar da melhor forma possivel o tempo disponibilizado para o teste. Mas desde já agradeço.
