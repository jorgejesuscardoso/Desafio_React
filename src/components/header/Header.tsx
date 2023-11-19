import { useNavigate } from "react-router-dom";
import { logoIcon, menuPontoIcon, profileIcon, searchIcon } from "../icons/Imports";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { searchNewsAction } from "../redux/action/actions";

function Header () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState(false); // Armazena o estado do input de pesquisa [true/false
  const [search, setSearch] = useState(''); // Armazena o valor do input de pesquisa
  const [showMenu, setShowMenu] = useState(false); // Armazena o estado do menu [true/false]

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
  return (
      <header className="header-container">
          <img
            src={ logoIcon }
            alt="Logo"
            className="logo"
            />
        <div className="ico-container">
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
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
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
