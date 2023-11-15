function Header () {
  return (
    <div>
      <header className="header-container">
          <img
            src="src/assets/bnLogo.png"
            alt="Logo"
            className="logo"
            />
        <div className="ico-container">
          <button>
            <img
              src="src/assets/perfil.png"
              alt="perfil"
              className="ico"
              />
          </button>
          <button>
            <img
              src="src/assets/lupa.png"
              alt="lupa"
              className="ico"
            />
          </button>
          <button>
            <img
              src="src/assets/cardapio.png"
              alt="menu"
              className="ico ico-menu"
            />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
