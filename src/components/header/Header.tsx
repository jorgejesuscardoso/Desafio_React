/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { SemFoto, logoIcon, menuPontoIcon, profileIcon, searchIcon } from "../icons/Imports";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchNewsAction } from "../redux/action/actions";

function Header () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState(false); // Armazena o estado do input de pesquisa [true/false
  const [search, setSearch] = useState(''); // Armazena o valor do input de pesquisa
  const [showMenu, setShowMenu] = useState(false); // Armazena o estado do menu [true/false]
  const [userConnected, setUserConected] = useState(false); // Armazena o estado do usuário logado [true/false]
  const [user, setUser] = useState({ name: '', thumb: ''});

  useEffect(() => {
    const user = localStorage.getItem('connected');
    const userData = localStorage.getItem('users');
    if (user) {      
      const users = JSON.parse(userData || '[]');
      const mapUser = users.map((u: any) => u).find((u: any) => u.id === JSON.parse(user).id);
      setUserConected(true);
      setUser({name: mapUser.nome, thumb: mapUser.foto});
    } else {
      setUserConected(false);
      setUser({name: '', thumb: ''});
    }
  }
  ,[userConnected]);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    setSearch('');
  }
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(searchNewsAction(search));
    setSearch('');
  }
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  const handleLogout = () => {
    localStorage.removeItem('connected');
    setUserConected(false);
  }
  return (
      <header className="header-container">
          <img
            src={ logoIcon }
            alt="Logo"
            className="logo"
            />
        <div className="ico-container">
          <div className="user-name-header">
            <img src={ userConnected ? user.thumb : SemFoto } alt="" />
            {userConnected ? (<h2>{user.name}</h2>) : (<p>Você está deslogado!</p>)}
          </div>
          <button
            onClick={() => navigate('/profile')}
          >
            <img
              src={ profileIcon }
              alt="perfil"
              className="ico"
              />
          </button>
          <button
            onClick={ handleShowSearch }
          >
            <img
              src={ searchIcon }
              alt="lupa"
              className="ico"
            />
          </button>
          <button
            type="button"
            onClick={ handleShowMenu }
          >
            <img
              src={ menuPontoIcon }
              alt="menu"
              className="ico"
            />
          </button>
          { showSearch ? (
            <div className="search-header-container">
              <form onSubmit={ handleSearch }>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn-search-header"    
                >
                  Buscar
                </button>
                <button 
                  type="button"
                  onClick={ handleShowSearch }
                  className="btn-close-header"
                >
                  ❌
                </button>
              </form>
            </div>
              ) : (
                <></>
              )
            }
          { showMenu ? (
            <div className="menu-header-container">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (userConnected) {
                    handleLogout();
                    return;
                  } 
                  if (!userConnected){
                    navigate('/login');
                  }
                }}                
              >
               { userConnected ? 'Sair' : 'Entrar' }
              </button>
              <button
                onClick={() => navigate('/register')}
                style={{ display: userConnected ? 'none' : 'block' }}
              >
                Registrar-se
              </button>
              <button
                onClick={() => navigate('/about')}
              >
                About
              </button>
              <button
                onClick={() => navigate('/contact')}
              >
                Contact
              </button>
              <button
                onClick={ handleShowMenu }
                className="btn-close-header"
              >
                ❌
              </button>
            </div>
          ) : (
            <></>
          )
          }
        </div>
      </header>
  );
}

export default Header;
