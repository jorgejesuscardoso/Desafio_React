/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { SemFoto, logoIcon, menuPontoIcon, profileIcon, searchIcon } from "../icons/Imports";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchNewsAction } from "../redux/action/actions";
import TopFilter from "../buttons/TopFilterBtn";
import {
  HeaderContainer,
  Ico,
  Icones,
  Logo,
  Search,
  UserNameHeader,
  MenuHeader,
  TopFilterContainer } from "./Style";
import { getUserLocalStorage } from "../utils/Utils";

function Header () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [showSearch, setShowSearch] = useState(false); // Armazena o estado do input de pesquisa [true/false
  const [search, setSearch] = useState(''); // Armazena o valor do input de pesquisa
  const [showMenu, setShowMenu] = useState(false); // Armazena o estado do menu [true/false]
  const [userConnectado, setUserConected] = useState(false); // Armazena o estado do usuário logado [true/false]
  const [user, setUser] = useState({ name: '', thumb: ''});

  useEffect(() => {
    const user = localStorage.getItem('connected');
    const userData = getUserLocalStorage('users');
    if (user) {      
      const mapUser = userData.map((u: any) => u).find((u: any) => u.id === JSON.parse(user).id);
      setUserConected(true);
      setUser({name: mapUser.nome, thumb: mapUser.foto});
    } else {
      setUserConected(false);
      setUser({name: '', thumb: ''});
    }
  }
  ,[userConnectado]);

  return (
      <HeaderContainer>
          <Logo
            src={ logoIcon }
            alt="Logo"
            />
        <Icones>
          <UserNameHeader>
            <img src={ user.thumb || SemFoto } alt="" />
            {userConnectado ? (<h2>{user.name}</h2>) : (<p>Você está deslogado!</p>)}
          </UserNameHeader>
          <button
            onClick={() => navigate('/profile')}
          >
            <Ico
              src={ profileIcon }
              alt="perfil"
              />
          </button>
          <button
            onClick={ () => {
              setShowSearch(!showSearch);
               setSearch('');
            } }
          >
            <Ico
              src={ searchIcon }
              alt="lupa"
            />
          </button>
          <button
            type="button"
            onClick={ () => setShowMenu(!showMenu) }
          >
            <Ico
              src={ menuPontoIcon }
              alt="menu"
            />
          </button>
          { showSearch ? (
            <Search>
              <form onSubmit={ (e) => {
                e.preventDefault();
                dispatch(searchNewsAction(search));
                setSearch('');
              } }>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"   
                >
                  Buscar
                </button>
                <button 
                  type="button"
                  onClick={ () => {
                    setShowSearch(!showSearch);
                    setSearch('');
                  } }
                  style={{ backgroundColor: '#fff', width: 25, height: 25 }}
                >
                  ❌
                </button>
              </form>
            </Search>
              ) : (
                <></>
              )
            }
          { showMenu ? (
            <MenuHeader>
              <ul>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (userConnectado) {
                        localStorage.removeItem('connected');
                        setUserConected(false);
                        return;
                      } 
                      if (!userConnectado){
                        navigate('/login');
                      }
                    }}
                    className={ userConnectado ? 'logoutBtn' : 'btn-login-header'}           
                  >
                  { userConnectado ? 'Sair' : 'Entrar' }
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/register')}
                    style={{ display: userConnectado ? 'none' : 'block' }}
                  >
                    Registrar-se
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/about')}
                  >
                    About
                  </button>
                </li>
              <li>
                <button
                    onClick={() => navigate('/contact')}
                  >
                    Contact
                  </button>
              </li>
              <li>
                <button
                  onClick={ () => setShowMenu(!showMenu) }
                >
                  ❌
                </button>
              </li>
             </ul>
            </MenuHeader>
          ) : (
            <></>
          )
          }
        </Icones>
        <TopFilterContainer className="top-filter">
          <TopFilter />
        </TopFilterContainer>
      </HeaderContainer>
  );
}

export default Header;
