import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import { Container, Sumary } from "./Style";

function About () {
const navigate = useNavigate();
return (
 <>
  <Container>
    <h1>Sobre este projeto</h1>
    <button
        onClick={() => navigate('/')}
        className="home-btn"
        style={{ position: 'fixed', bottom: 5, right: 5, width: 80 }}
    >
        Inicio
    </button>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="home-btn"
      style={{ position: 'fixed', bottom: 5, left: 5, width: 80, backgroundColor: '#444' }}
    >
      Top
    </button>
    <section style={{ width: "100%" }}>
      <Sumary>
        <h2>Sumário</h2>
        <ol>
          <li>
            <a href="#about">Sobre</a>
              <ul>
                <li>
                  <a href="#description">Descrição</a>                  
                </li>
              </ul>
          </li>
          <li>
            <a href="#dev">Desenvolvimento</a>
            <ul>
              <li>
                <a href="#tools">Ferramentas</a>
              </li>
              <li>
                <a href="#version">Versão das dependências</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#home">Componentes</a>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#header">Header</a>
              </li>
              <li>
                <a href="#register">Cadastro de usuário</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
              <li>
                <a href="#profile">Perfil</a>
              </li> 
            </ul>
          </li>
          <li>
            <a href="#local">Montar localmente</a>
            <ul>
              <li>
                <a href="#clone">Clone</a>
              </li>
              <li>
                <a href="#test">Testes</a>
              </li>
              <li>
                <a href="#build">Build</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#finaly">Considerações finais</a>
          </li>
        </ol>
      </Sumary>
    </section>
    <section>
      <h2 style={{ textAlign: 'center' }}>Desafio React</h2>
        <article>
          <h3 id='about'>Descrição</h3>
          <span id='description'>
            Este é um desafio para testar meus conhecimentos em React.
            O desafio consiste em criar um aplicativo web para exibir notícias utilizando a API do IBGE na sua versão 3 que foi lançada em 05/06/2017.
          </span>
        <br/>
        <br/>
        <span>
            O aplicativo deve conter as noticias atuais, as mais recentes do IBGE, quanto tempo se passou desde a publicação e também um link para a noticia completa.
        </span>
        <br/>
        <br/>
        <span>
            O aplicativo deve ser responsivo e funcionar bem em dispositivos móveis quanto em computadores( desktops e notebooks).
        </span>
        <br/>
        <br/>
        <span>
            O aplicativo deve ser desenvolvido utilizando React e TypeScript. Respeitando as boas práticas de desenvolvimento e semântica HTML.
        </span>
        <br/>
        <br/>
        <span>
          Testes unitários e deploy são opcionais, mas serão considerados como um diferencial. A cobertura de testes também será considerada. O minimo de cobertura esperado é de 50%.
        </span>
        <br/>
        <br/>
        </article>

        <article>
        <h2 style={{ textAlign: 'center' }} id='dev'>Desencolvimento</h2 >
        <br/>
        <h3 id='tools'>Ferramentas</h3>
        <span>
          Para o desenvolvimento do aplicativo foi utilizado React, vite, TypeScript, React Router, React-Redux, Redux-devtools e React Testing Library.
          Para a estilização foi utilizado CSS puro e styled-components.
        </span>
        <br/>
        <br/>
        <span>
          Para a persistência de dados foi utilizado o Local Storage.
        </span>
        <br/>
        <br/>
        <span>
          Para os testes unitários foi utilizado React Testing Library e vitest.
        </span>
        <br/>
        <br/>
        <h3 >Sobre o porque dessas ferramentas de produção</h3>
        <span>
          Utilizei o redux para gerenciar o estado da aplicação, mas não foi necessário utilizar o redux-thunk ou redux-saga.
        </span>
        <br/>
        <br/>
        <span>
          Utilizei o React Router para gerenciar as rotas da aplicação.
          Estou bem familiarizado com o React Router, então foi a escolha mais natural.
        </span>
        <br/>
        <br/>
        <span>
          Utilizei o Local Storage para persistência de dados, pois o desafio não permitia utilizar banco de dados, e acabei de entrar em backend, ainda não sei utilizar mysql, postgresql, mongodb e outros.
        </span>
        <br/>
        <br/>
        <span>
          Utilizei o React Testing Library para os testes unitários, pois é a biblioteca que mais estou familiarizado.
        </span>
        <br/>
        <br/>
        <span>
          Utilizei o vite para o desenvolvimento, pois é mais rápido que o webpack. E durante todo o modulo de front-end não utilizei outra coisa.
        </span>
        <br/>
        <br/>
        <span>
          Utilizei o styled-components para a estilização, pois é a biblioteca que mais estou familiarizado. Acho mais facil de utilizar e mais facil de manter o código e evita conflitos de classes.
        </span>
        <br/>
        <br/>
        <h3 id='version'>Versão das dependẽncias</h3>
        <span>
          <strong>React</strong>: 18.2.0 <br />
          <strong>React Router</strong>: 6.18.0 <br />
          <strong>React Redux</strong>: 8.1.3 <br />
          <strong>Redux Devtools</strong>: 3.2.6 <br />
          <strong>React Testing Library</strong>: 14.1.2 <br />
          <strong>Vitest</strong>: 0.34.6 <br />
          <strong>Vite</strong>: 4.4.5 <br />
          <strong>TypeScript</strong>: 5.0.2 <br />
          <strong>Styled Components</strong>: 6.1.1 <br />
        </span>

        <h3 id='home'>Home</h3>
        <br/>
        <span>
          Na página inicial é possível ver as notícias e filtrar por categoria.
        </span>
        <br/>
        <br/>
        <span>
          No card das notícia é possível ver os detalhes como titulo e a introdução da notícia e uma imagem de introdução.
        </span>
        <br/>
        <br/>
        <span>
          Ao clicar em ler mais é possível ir para o site do IBGE onde poderá ver a notícia completa.
        </span>
        <br/>
        <br/>
        <span>
          Existe mais filtros na página inicial, como ordenar por favoritos, marcados, todos e release. Os filtros é lançado na tela de acordo com sua posição na página que foi enviada pela API. E está organizado por data/hora de publicação. Alem de que os filtros ocultam os cards que não se encaixam no filtro.  
        </span>
        <br/>
        <br/>
        <span>
          Dessa forma, se o filtro for por favoritos, apenas os cards que foram marcados como favoritos serão exibidos. Isso pode gerar paginas com poucos ou nenhum card, necessitando avançar para a próxima página para ver mais cards.
        </span>
        <br/>
        <br/>
        <span>
          <strong>Exemplo</strong>: Filtrou por enconomia, então na tela aparecerá apenas as notícias de economia. Mas, se na primeira página enviada pela API, haver apenas 1 noticia sobre economia, será gerado apenas 1 card, e para ver mais, será necessário seguir para a próxima página. Se na segunda página houver 3 notícias sobre economia, serão gerados 3 cards. E assim por diante.
        </span>
        <br/>
        <br/>
        <span>
          No roda pé, é possivel ver 3 botões. O primeiro é para voltar para página anterior, o segundo abre um menu com mais filtros; Geociencia, Sociais, Pesquisar por data, Fonte IBGE e Economia. O terceiro é para ir para a página seguinte, seja qual for o filtro que esteja marcado.
        </span>
        <br/>
        <br/>
          <h3 id='header'>Header</h3>
        <br/>
        <span>
          No header é possível ver o nome e a foto do usuário logado. Tambem é possível ver um botão para ir para a página de perfil, input de pesquisa e um menu com os botões de login, logout, about e contato.
        </span>
        <br/>
        <br/>
        <span>
          O input de pesquisa é para pesquisar por notícias. Mas por algum motivo sempre retornar uma mesma noticia, não consegui resolver esse problema. Acredito que seja algo com a API. 
        </span>
        <br/>
        <br/>
        <span>
          O botão de login abre uma página para fazer login. Se a
          pessoa já estiver logada, o botão de login é substituido pelo botão de logout.
        </span>
        <br/>
        <br/>
        <span>
          O botão 'sair' faz logout do usuário removendo seus dados do localstorage sem sair da página home.
        </span>
        <br/>
        <br/>

        <h3 id="register">Cadastro de usuário</h3><br/>
        <span>
          Não foi solicitado no desafio, mas implementei as páginas de login e cadastro de usuário além da de perfil.
        </span>
        <br/>
        <br/>
        <span>
          O cadastro de usuário é feito utilizando o Local Storage para persistência de dados.
        </span>
        <br/>
        <br/>
        <span>
          Para o cadastro de usuário é necessário informar o nome, email, senha, endereço e a foto é opcional.
        </span>
        <br/>
        <br/>
        <span>
          Esses dados são salvos no Local Storage na chave "users" e são utilizados para o login e para alimentar a página de perfil. Eles podem ser alterados na página de perfil. Ao clicar no botão 'Editar' será aberta uma página para alterar os dados do usuário.
        </span>
        <br/>
        <br/>
        <h3 id='login'>Login</h3>
        <br/>
        <span>
          O login é feito utilizando o Local Storage para persistência do estado na chave 'connected'( mantendo o email, id e senhas salvas para conferencia quando for atualizar no 'Edit_profile'), e requisição dos dados, email e senha para validação.
        </span>
        <br/>
        <br/>
        <span>
          Para o login é necessário informar o email e senha.
          Se o usuário não estiver cadastrado, será exibido um alerta informando que o usuário não está cadastrado. E se tiver logado ao entrar na página de login, será exibido um alerta informando que o usuário já está logado.
        </span>
        <br/>
        <br/>
        <h3 id="profile">Perfil</h3>
        <br/>
        <span>
          Na página de perfil é possível ver todos os dados do usuário que foi usado durante o cadastro e também existe um botão para alterar os dados do usuário e outros dois para fazer logout e ir para home.
        </span>
        <br/>
        <br/>
        <span>
          O botão de alterar dados abre uma página para alterar os dados do usuário. Nessa página é possível alterar todos os dados do usuário, além de ver os dados atuais. É possivel alterar apenas um ou todos os dados.
        </span>
      </article>
    </section>
    <section>
      <article
        style={{ textAlign: 'justify', fontSize: '16px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}
      >
      <h2 id='local' style={{ textAlign: 'center' }}>Para montar localmente</h2>
      <br/>
      <br/>
      <h3>Dependências</h3>
      <span>
        Para montar o projeto localmente, é necessário ter o NodeJS instalado. Ter feito o clone do repositório e ter instalado as dependências do projeto.
      </span>
      <br/>
      <br/>
      <h3 id='clone'>Clone</h3>
      <span>
        Para clonar o repositório, basta rodar o comando git clone com a chave ssh <i><b>git clone git@github.com:jorgejesuscardoso/Desafio_React.git</b></i>.
      </span>
      <br/>
      <br/>
      <span>
        Para instalar as dependências do projeto, basta rodar o comando 'npm install' ou 'yarn install'.
      </span>
      <br/>
      <br/>
      <span>
        Primeiro abra seu terminal e navegue até a pasta onde deseja clonar o repositório. Se tiver usando linux basta clicar com o botão direito do mouse na pasta e selecionar a opção 'Abrir no terminal'. Entao digite o comando git clone. Se estiver usando windows, basta abrir o terminal e navegar até a pasta onde deseja clonar o repositório. Então digite o comando git clone. Se tiver com mac, basta abrir o terminal e navegar até a pasta onde deseja clonar o repositório. Então digite o comando git clone.
      </span>
      <br/>
      <br/>
      <span>
        Apois isso, todos os arquivos será clonados para a pasta selecionada. Então navegue até a pasta do projeto e abra o terminal. Então digite o comando 'npm install' ou 'yarn install' para instalar as dependências do projeto.
      </span>
      <br/>
      <br/>
      <span>
        Apos instalar as dependências, basta rodar o comando 'npm run dev' ou 'yarn dev' para executar o projeto. O navegador será aberto automaticamente. Se não abrir, basta abrir o navegador e digitar 'localhost:3000' na barra de endereço. É essencial que tenha o NodeJS instalado e tenha configurado corretamente o git.
      </span>
      <br/>
      <br/>
      <span>
        Para instalar o NodeJS, basta acessar o site oficial do NodeJS e baixar a versão LTS.
      </span>
      <br/>
      <h3 id='test'>Testes</h3>
      <span>
        Para executar os testes, basta rodar o comando 'npm run test' ou 'yarn test'.
      </span>
      <br/>
      <br/>
      <span>
        Apos executar o comando, será exibido no terminarl os resultados dos testes.
      </span>
      <br/>
      <br/>
      <span>
        Para executar os testes com cobertura, basta rodar o comando 'npm run test:coverage' ou 'yarn test:coverage'. Apos executar o comando, será exibido no terminarl os resultados dos testes com cobertura dos respectivos arquivos e suas funções, linhas e branches.
      </span>
      <br/>
      <br/>
      <span>
        <strong>Exemplo</strong>: 
        <br/>
        <br/>
        <b><i>npm run test: Bem sucedido</i></b>
        <div><img src="src/assets/testSucess.png" alt=""  style={{ width: 250 }}/></div>
      </span>
      <br/>
      <br/>
      <span>
        <strong>Exemplo</strong>: 
        <br/>
        <br/>
        <b><i>npm run test: Falho</i></b>
        <div><img src="src/assets/testFail.png" alt=""  style={{ width: 250 }}/></div>
      </span>
      <br/>
      <br/>
      <span>
        <strong>Exemplo</strong>: 
        <br/>
        <br/>
        <b><i>npm run test:coverage</i></b>
        <div><img src="src/assets/testCoverage.png" alt=""  style={{ width: 250 }}/></div>
      </span>
        <br/>
        <br/>
      <h3 id='build'>Build</h3>
      <span>
        Para fazer o build do projeto, basta rodar o comando 'npm run build' ou 'yarn build'.
      </span>
      <br/>
      <br/>
      <span>
        Apos executar o comando, será criada uma pasta chamada 'dist' com os arquivos necessários para o deploy.
      </span>
      <br/>
      <br/>

       <h3>Agradecimentos Especiais</h3>
      <span>
        Gostaria de agradecer ao ChatGPT pela ajuda na revisão da documentação deste projeto. Além de tirar muitas duvidas que sugiram durante o desenvolvimento. Suas contribuições foram valiosas durante o desenvolvimento do projeto e na qualidade e clareza das informações apresentadas neste README.

      </span>
      <br />
      <h3 id='finaly'>Considerações finais</h3>
      <span>
        Obrigado por ler até aqui. Espero que tenha gostado do projeto. Foi feito com muito carinho e dedicação. E espero que tenha gostado do resultado.
      </span>
      <span>
        Foi desafiador, mas muito divertido. Aprendi muito com esse desafio. 
      </span>
      <br/>
      <br/>
      <span>
        Qualquer dúvida, sugestão ou crítica, pode entrar em contato comigo pelo email: <strong>tst.jorgecardoso@gmail.com</strong>
      </span>
      <br />
      <br />
    </article>
  </section>
  </Container>
  <Footer />
</>
);
}

export default About;
