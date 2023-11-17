import { logoIcon, menuPontoIcon, profileIcon, searchIcon } from "../icons/Imports";

function Header () {
  return (
    <div>
      <header className="header-container">
          <img
            src={ logoIcon }
            alt="Logo"
            className="logo"
            />
        <div className="ico-container">
          <button>
            <img
              src={ profileIcon }
              alt="perfil"
              className="ico"
              />
          </button>
          <button>
            <img
              src={ searchIcon }
              alt="lupa"
              className="ico"
            />
          </button>
          <button>
            <img
              src={ menuPontoIcon }
              alt="menu"
              className="ico"
            />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
