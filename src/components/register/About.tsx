import { useNavigate } from "react-router-dom";

function About () {
    const navigate = useNavigate();
    return (
        <main className="about-container">
            <h1>Sobre</h1>
            <button
                onClick={() => navigate('/')}
            >
                Inicio
            </button>
            <section className="about">
              <h2>Desafio React</h2>
                <article>
                  <h3>Descrição</h3>
                  <span>
                    Este é um desafio para testar meus conhecimentos em React.
                    O desafio consiste em criar um aplicativo web para exibir notícias utilizando a API do IBGE.
                </span>
                <br/>
                <span>
                    O aplicativo deve conter duas páginas principais: uma para listar as notícias e outra para exibir os detalhes de uma notícia específica.
                </span>
                <br/>
                <span>
                    O aplicativo deve ser responsivo e funcionar em dispositivos móveis quanto em computadores.
                </span>
                <br/>
                <span>
                    O aplicativo deve ser desenvolvido utilizando React e TypeScript. Respeitando as boas práticas de desenvolvimento e semântica HTML.
                </span>
                <br/>
                <span>
                  Testes unitários são opcionais, mas serão considerados como um diferencial. A cobertura de testes também será considerada. O minimo de cobertura esperado é de 50%.
                </span>

                <h3>Desencolvimento</h3>
                <span>
                  Para o desenvolvimento do aplicativo foi utilizado React, vite, TypeScript, React Router, React-Redux e React Testing Library.

                  Para a estilização foi utilizado CSS puro e styled-components.
                </span>
                <br/>
                <span>
                  Para a persistência de dados foi utilizado o Local Storage.
                </span>
                <br/>
                <span>
                  Para os testes unitários foi utilizado React Testing Library e vitest.
                </span>
                <br/>
                <h3>Home</h3>
                <br/>
                <span>
                  Na página inicial é possível ver as notícias e filtrar por categoria.
                </span>
                <br/>
                <span>
                  Ao clicar em uma notícia é possível ver os detalhes como titulo e a introdução da notícia.
                </span>
                <br/>
                <span>
                  Ao clicar em ler mais é possível ver a notícia completa.
                </span>
                <br/>
                <span>
                  Existe mais filtros na página inicial, como ordenar por favoritos, marcados, todos e release.
                </span>
                <br/>
                <span>
                  No roda pá é possivel ver 3 botões. O primeiro é para voltar para página anterior, o segundo abre um menu com mais filtros, Geociencia, Sociais, Data, IBGE e Economia. O terceiro é para ir para a página seguinte, seja qual for o filtro marcado.
                </span>
                <br/>
                <h3>Notícia</h3>
                <br/>
                <span>
                  Na página de notícia é possível ver o titulo, a introdução e a notícia completa.
                </span>
                <br/>
                <span>
                  No header da página de notícia é possível ver o nome e a foto do usuário logado.
                </span>
                <br/>
                <span>
                  No rodapé da página de notícia é possível ver 3 botões. O primeiro é para voltar para página anterior, o segundo volta para a página home, o terceiro é para ir para a página seguinte.
                </span>
                <br/>
                  <h3>Header</h3>
                <br/>
                <span>
                  No header é possível ver o nome e a foto do usuário logado. Tambem é possível ver um botão para ir para a página de perfil, input de pesquisa e um menu com os botões de login, logout, about e contato.
                </span>
                <br/>
                <span>
                  O input de pesquisa é para pesquisar por notícias. Mas por algum motivo sempre retornar uma mesma noticia, não consegui resolver esse problema.
                </span>
                <br/>
                <span>
                  O botão de login abre uma página para fazer login.
                </span>
                <br/>
                <span>
                  O botão de logout faz logout do usuário removendo seus dados do localstorage e sem sair da página home.
                </span>
                <br/>
                <span>
                  O nome e a foto do usuário logado são salvos no Local Storage.
                </span>
                <br/>

                <h3>Cadastro de usuário</h3><br/>
                <span>
                  Não foi solicitado mas implementei as páginas de login e cadastro de usuário além da de perfil.
                </span>
                <br/>
                <span>
                  O cadastro de usuário é feito utilizando o Local Storage para persistência de dados.
                </span>
                <br/>
                <span>
                  Para o cadastro de usuário é necessário informar o nome, email, senha, endereço e foto opcional.
                </span>
                <br/>
                <span>
                  Esses dados são salvos no Local Storage e são utilizados para o login e para alimentar a página de perfil. Eles podem ser alterados na página de perfil.
                </span>
                <br/>
                <h3>Login</h3>
                <br/>
                <span>
                  O login é feito utilizando o Local Storage para persistência e requisição de dados.
                </span>
                <br/>
                <span>
                  Para o login é necessário informar o email e senha.
                  No header da página de home é possível ver o nome e a foto do usuário logado.
                </span>
                <br/>
                <h3>Perfil</h3>
                <br/>
                <span>
                  Na página de perfil é possível ver todos os dados do usuário que foi usado durante o cadastro e também existe um botão para alterar os dados do usuário e outro para fazer logout e ir para home.
                </span>
                <br/>
                <span>
                  O botão de alterar dados abre uma página para alterar os dados do usuário. Nessa página é possível alterar todos os dados do usuário, além de ver os dados atuais. É possivel alterar apenas um ou todos os dados.
                </span>
              </article>
            </section>
        </main>
    );
}

export default About;
