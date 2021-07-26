import {
  sheldonfinal,
  wire3,
  glasses2,
  cocktails,
  menu,
  cart,
  infinityscroll,
  player,
  bookeeper,
  countdown,
  movies,
  med,
  med2,
  inicial,
  form,
  pk_lot,
} from "./assets";

export const data = [
  {
    title: "App de Estacionamentos",
    description:
      "O projeto simula uma aplicação paa gerenciar um estacionamento, o principal objetivo da aplicação é dar a possibilidade de armazenar todo tipo de informação necessária para o estabelecimento, desde cada veículo estacionado ao tempo de permanência e o valor pago por cada cliente. Também é possível gerenciar dados relacionados aos funcionários do estacionamento,como turnos e informações pessoais, além da possibilidade de conferir quem são os funcionários aniversariantes a cada mês. Tudo é armazenado num banco de dados mySQL através de uma Api desenvolvida com Express e Sequelize.",
    stack:
      "React | Styled-Components | Axios | React-Router | Node | Express | MySQL | Sequelize ",
    url: "https://the-parking-lot.netlify.app/",
    gitRepo: "https://github.com/TauDuque/client-pk-lot",
    gif: pk_lot,
    category: "Full Stack",
  },
  {
    title: "Agenda de Consultas",
    description:
      "Aplicativo feito com React e recursos da AWS. O aplicativo permite agendar consultas através de um formulário onde diversos dados do paciente são registrados, assim como data e hora da consulta, os dados são armazenados no banco de dados DynamoDB através de funções Lambda e podem ser consultados, alterados e apagados conforme necessário.",
    stack:
      " React | Material-UI | Node | Express | DynamoDB | AWS Lambda | AWS Amplify",
    url: "https://consultas.netlify.app/",
    gitRepo: "https://github.com/TauDuque/mcld-test",
    gif: med,
    category: "Full Stack",
  },
  {
    title: "Aplicativo de RH",
    description:
      "Desenvolvido com React e Styled-Components no Front-End e Express em conjunto com a ORM Sequelize. Aplicativo para Departamentos de RH gerenciarem dados dos funcionários, após o registro os dados são armazenados e podem ser consultados, deletados ou atualizados.",
    stack:
      " React | Styled-Components | Node | Express | mySQL | Sequelize | Axios",
    url: "https://rh-react.netlify.app/",
    gitRepo: "https://github.com/TauDuque/rh-app-front-end",
    gif: inicial,
    category: "Full Stack",
  },
  {
    title: "Movies DB",
    description:
      "Utilizando uma API da OMBD com dados de diversos filmes, Context API e React Router eu desenvolvi uma pequena biblioteca de filmes com diversas informações sobre a produção. O usuário do aplicativo pode realizar uma busca por título através de um input, a API da OMDB é acionada e começa a exibir os filmes de acordo com as mudanças no input",
    stack: "HTML | CSS | JavaScript | ReactJs",
    url: "https://movies-omdb.netlify.app/",
    gitRepo: "https://github.com/TauDuque/movies-DB-project",
    gif: movies,
    category: "React",
  },
  {
    title: "Fun With Flags",
    description:
      "Projeto pessoal que foi originado enquanto eu refletia como poderia usar o React para tirar algumas ideias da cabeça eimplementa-las de uma maneira prática. O projeto segue em andamento, mas enquanto isso é possível através do cursor do mouse alterar as cores para formar diferentes bandeiras.'",
    stack: "HTML | CSS | JavaScript | ReactJs",
    url: "https://funwithflags-br.netlify.app/",
    gitRepo: "https://github.com/TauDuque/fun-with-flags",
    gif: sheldonfinal,
    category: "React",
  },
  {
    title: "The Wire Brasil",
    description:
      "Com o intuito de colocar em prática meu aprendizado estou desenvolvendo esse projeto pessoal. Trata-se de uma fan page da série de tv 'the Wire' 'exibida pela HBO entre 2002 e2008, a iniciativa nasceu por interesse pessoal e ausência de conteúdo relacionado a série em língua portuguesa. O site possui um background slider na sessão home e carouselsliders nas demais sessões. Além disso há uma barra de navegação fixa com uma animação em CSS.",
    stack: "HTML | CSS | JavaScript | ReactJs",
    url: "https://the-wire-br.netlify.app/",
    gitRepo: "https://github.com/TauDuque/wire-project",
    gif: wire3,
    category: "React",
  },
  {
    title: "Smart Glasses",
    description:
      "O Smart Glasses é o projeto final curso Zero to Mastery,trata-se de um projeto full-stack desenvolvido com ReactJs e NodeJs. Cadastro e armazenamento de usuários em banco de dados, além disso, o número de interações dos usuários também é armazenado. Consumindo o API de reconhecimento facial da Clarifai.",
    stack:
      "HTML | CSS | JavaScript | React | NodeJs | Express | Bcrypt | PostgreSQL",
    url: "https://smart-glasses.herokuapp.com/",
    gitRepo: "https://github.com/TauDuque/smart-glasses-front-end",
    gif: glasses2,
    category: "Full Stack",
  },
  {
    title: "Menu de Drinks",
    description:
      " Com a intenção de aprimorar a utilização de React Hooks como useRef e useReducer iniciei o desenvolvimento desse projeto da Coding Addict. Além dos Hooks o projeto também possui conexão com a API da TheCocktailDB e utilização do React Router permitindo ao usuário navegar entre as paǵinas de receitas de drinks.",
    stack: "HTML | CSS | JavaScript | ReactJs",
    url: "https://menu-drinks.netlify.app/",
    gitRepo: "https://github.com/TauDuque/cocktails-project",
    gif: cocktails,
    category: "React",
  },
  {
    title: "Carrinho de Compras / Webshop",
    description:
      " Este projeto simula uma página deetapa final de compras numa webshop, o app fornece o número total de items inseridos no carrinho, a soma de seus preços e a quantidade individual de cada um dos items. Além disso, o aplicativo permite ao usuário aumentar ou diminuir a quantidade  de cada item, remover um item de duas formas, assim como esvaziar o carrinho retirando todos os items. Projetodesenvolvido com o uso de ReactJs.",
    stack: "HTML | CSS | JavaScript | ReactJs",
    url: "https://webshop-cart.netlify.app/",
    gitRepo: "https://github.com/TauDuque/cart-project",
    gif: cart,
    category: "React",
  },
  {
    title: "Menu",
    description:
      "Projeto desenvolvido com o objetivo de praticar alguns fundamentos novos de ReactJs que estava aprendendo. O app Menu busca simular um cardápio comum de qualquer lanchonete ou restaurante, dividindo as refeições de acordo com o horário em que é servida o que permite a seleção de qual tipo de refeição o usuário do aplicativo está buscando.",
    stack: "HTML | CSS | JavaScript | ReactJs",
    url: "https://my-menu.netlify.app/",
    gitRepo: "https://github.com/TauDuque/menu-project",
    gif: menu,
    category: "React",
  },
  {
    title: "Infinity Scroll",
    description:
      "O projeto Infinity Scroll é parte de um curso de JavaScript que estou fazendo, o principal objetivo do projeto é estabelecer familiaridade com o uso de APIs para diferentes finalidades. Além da conexão com o API de imagens da Unsplash que se 'renova' sempre que a barra da página chega próxima do fim, dando a impressão de rolagem de tela infinita, o app posui um loading animado feito com uso de CSS que é exibido enquando as imagens são carregadas.",
    stack: "HTML | CSS | JavaScript<",
    url: "https://the-infinity-scroll.netlify.app/",
    gitRepo: "https://github.com/TauDuque/infinity-scroll-project-JS",
    gif: infinityscroll,
    category: "Vanilla JavaScript",
  },
  {
    title: "Player Bando de Seu Pereira",
    description:
      " Em busca de aperfeiçoar alguns fundamentos de JavaScript que estou aprendendo desenvolvi esse projeto. É basicamente um player de musicas do grupo Bando de Seu Pereira de São Paulo. Além das músicas, o projeto também contém imagens e ilustrações do grupo. Os controles permitem ao ouvinte avançar ou retroceder para momentos específicos das músicas, assim como pular faixas ou voltar a anterior. Após o término de uma música, a seguinte é iniciada sem necessidade de nenhum comando, permitindo maior imersão a quem está ouvindo as músicas.",
    stack: "HTML | CSS | JavaScript",
    url: "https://bando-player.netlify.app/",
    gitRepo: "https://github.com/TauDuque/bando-player",
    gif: player,
    category: "Vanilla JavaScript",
  },
  {
    title: "Countdown",
    description:
      "Desenvolvido com JavaScript, o projeto Final Countdown permite ao usuário agendar um evento, tarefa ou acontecimento e acompanhar a quantidade exata de tempo até aquele dia agendado chegar. Mesmo recarregando ou saindo do site o usuário permanecerá com a mesma contagem até reiniciar o contador e inserir outra atividade. Após o fim da contagem no dia agendado, o usuário poderá saber o momento exato em que a contagem terminou.",
    stack: "HTML | CSS | JavaScript",
    url: "https://final-countdown.netlify.app/",
    gitRepo: "https://github.com/TauDuque/menu-project",
    gif: countdown,
    category: "Vanilla JavaScript",
  },
  {
    title: "Marcador de sites",
    description:
      "O projeto me permitiu botar em prática alguns conceitos e fundamentos de JavaScript como armazenamento de preferências ou opções dos usuários do app. Trata-se de um aplicativo simples que permite ao usuário selecionar diversos sites e acessá-los com apenas um clique.",
    stack: "HTML | CSS | JavaScript",
    url: "https://book-kepper.netlify.app/",
    gitRepo: "https://github.com/TauDuque/book-keeper",
    gif: bookeeper,
    category: "Vanilla JavaScript",
  },
];

/* 
{
    title: "",
    description: "",
    stack: "",
    url: "",
    gitRepo: "",
    gif: "",
    category: "",
},

*/
