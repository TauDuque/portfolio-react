import React from "react";
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
} from "../assets";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title var(--secondary-color)">Projetos</h2>
          {/* <!-- Each .row is a project --> */}
          <h5 className="section-title var(--secondary-color)">React</h5>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Fun With Flags</h3>
                <div>
                  <p className="mb-4">
                    ReactJs é uma biblioteca que me impressionou muito por todas
                    as possibilidades que ela proporciona, o Fun With Flags é um
                    projeto pessoal que foi originado enquanto eu refletia como
                    poderia usar o React para tirar algumas ideias da cabeça e
                    implementa-las de uma maneira prática. O projeto segue em
                    andamento, mas enquanto isso é possível através do cursor do
                    mouse alterar as cores para formar diferentes bandeiras.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript | ReactJs</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://funwithflags-br.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/fun-with-flags"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://funwithflags-br.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={sheldonfinal} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">The Wire Brasil</h3>
                <div>
                  <p className="mb-4">
                    Com o intuito de colocar em prática meu aprendizado estou
                    desenvolvendo esse projeto pessoal. Trata-se de uma fan page
                    da série de tv "the Wire" exibida pela hbo entre 2002 e
                    2008, a iniciativa nasceu por interesse pessoal e ausência
                    de conteúdo relacionado a série em língua portuguesa. O site
                    possui um background slider na sessão home e carousel
                    sliders nas demais sessões. Além disso há uma barra de
                    navegação fixa com uma animação em CSS.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript | ReactJs</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://the-wire-br.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/wire-project"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://the-wire-br.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={wire3} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Smart Glasses</h3>
                <div>
                  <p className="mb-4">
                    O Smart Glasses é o projeto final do curso Zero to Mastery,
                    trata-se de um projeto full-stack desenvolvido com ReactJs e
                    NodeJs. Cadastro e armazenamento de usuários em um banco de
                    dados, além disso, o número de interações dos usuários
                    também é armazenado. Possui conexão com o API de
                    reconhecimento facial da Clarifai.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">
                    HTML | CSS | JavaScript | React | NodeJs | Express | Bcrypt
                    | PostgreSQL
                  </p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://smart-glasses.herokuapp.com/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/smart-glasses-front-end"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://smart-glasses.herokuapp.com/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={glasses2} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/*  <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Menu de Drinks</h3>
                <div>
                  <p className="mb-4">
                    Com a intenção de aprimorar a utilização de React Hooks como
                    useRef e useReducer iniciei o desenvolvimento desse projeto
                    da Coding Addict. Além dos Hooks o projeto também possui
                    conexão com a API da TheCocktailDB e utilização do React
                    Router permitindo ao usuário navegar entre as paǵinas de
                    receitas de drinks.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript | ReactJs</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://menu-drinks.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/cocktails-project"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://menu-drinks.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={cocktails} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Menu</h3>
                <div>
                  <p className="mb-4">
                    Projeto desenvolvido com o objetivo de praticar alguns
                    fundamentos novos de ReactJs que estava aprendendo. O app
                    Menu busca simular um cardápio comum de qualquer lanchonete
                    ou restaurante, dividindo as refeições de acordo com o
                    horário em que é servida o que permite a seleção de qual
                    tipo de refeição o usuário do aplicativo está buscando.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript | ReactJs</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://my-menu.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/menu-project"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://my-menu.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={menu} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/*  <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">
                  Carrinho de Compras / Webshop
                </h3>
                <div>
                  <p className="mb-4">
                    Este projeto simula uma página de etapa final de compras
                    numa webshop, o app fornece o número total de items
                    inseridos no carrinho, a soma de seus preços e a quantidade
                    individual de cada um dos items. Além disso, o aplicativo
                    permite ao usuário aumentar ou diminuir a quantidade de cada
                    item, remover um item de duas formas, assim como esvaziar o
                    carrinho retirando todos os items. Projeto desenvolvido com
                    o uso de ReactJs.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript | ReactJs</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://webshop-cart.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/cart-project"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://webshop-cart.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={cart} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <h5 className="section-title var(--secondary-color)">
            Vanilla JavaScript
          </h5>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Infinity Scroll</h3>
                <div>
                  <p className="mb-4">
                    O projeto Infinity Scroll é parte de um curso de JavaScript
                    que estou fazendo, o principal objetivo do projeto é
                    estabelecer familiaridade com o uso de APIs para diferentes
                    finalidades. Além da conexão com o API de imagens da
                    Unsplash que se "renova" sempre que a barra da página chega
                    próxima do fim, dando a impressão de rolagem de tela
                    infinita, o app posui um loading animado feito com uso de
                    CSS que é exibido enquando as imagens são carregadas.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://the-infinity-scroll.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/infinity-scroll-project-JS"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a
                  href="https://the-infinity-scroll.netlify.app/"
                  target="_blank"
                >
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={infinityscroll} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/*  <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Player Bando de Seu Pereira</h3>
                <div>
                  <p className="mb-4">
                    Em busca de aperfeiçoar alguns fundamentos de JavaScript que
                    estou aprendendo desenvolvi esse projeto. É basicamente um
                    player de musicas do grupo Bando de Seu Pereira de São
                    Paulo. Além das músicas, o projeto também contém imagens e
                    ilustrações do grupo. Os controles permitem ao ouvinte
                    avançar ou retroceder para momentos específicos das músicas,
                    assim como pular faixas ou voltar a anterior. Após o término
                    de uma música, a seguinte é iniciada sem necessidade de
                    nenhum comando, permitindo maior imersão a quem está ouvindo
                    as músicas.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://bando-player.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/bando-player"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://bando-player.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={player} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Countdown</h3>
                <div>
                  <p className="mb-4">
                    Desenvolvido com JavaScript, o projeto Final Countdown
                    permite ao usuário agendar um evento, tarefa ou
                    acontecimento e acompanhar a quantidade exata de tempo até
                    aquele dia agendado chegar. Mesmo recarregando ou saindo do
                    site o usuário permanecerá com a mesma contagem até
                    reiniciar o contador e inserir outra atividade. Após o fim
                    da contagem no dia agendado, o usuário poderá saber o
                    momento exato em que a contagem terminou.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://my-menu.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/menu-project"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://my-menu.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={countdown} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}

          {/* <!-- Each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="projects-text">
                <h3 className="projects-title">Marcador de sites</h3>
                <div>
                  <p className="mb-4">
                    O projeto me permitiu botar em prática alguns conceitos e
                    fundamentos de JavaScript como armazenamento de preferências
                    ou opções dos usuários do app. Trata-se de um aplicativo
                    simples que permite ao usuário selecionar diversos sites e
                    acessá-los com apenas um clique.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                  <p className="mb-4">HTML | CSS | JavaScript</p>
                </div>
                <a
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://book-kepper.netlify.app/"
                >
                  Live demo
                </a>
                <a
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/TauDuque/book-keeper"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="projects-image">
                <a href="https://book-kepper.netlify.app/" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={bookeeper} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}
          <span className="mt-2">
            <a
              target="_blank"
              className="cta-btn cta-btn--hero"
              href="https://github.com/TauDuque"
            >
              Veja meus projetos no GitHub
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
