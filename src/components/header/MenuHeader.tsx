import { useNavigate } from "react-router-dom";
import { MenuHeader } from "./Style";
import { MenuHeaderContentProps } from "../../type";


function MenuHeaderContent ({ userConectado, setUserConectado, setShowMenu }: MenuHeaderContentProps) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('connected');
    setUserConectado(false);
  };

  const handleLoginClick = () => {
    if (!userConectado) {
      navigate('/login');
    }
  };
  return (
    <MenuHeader data-testid='menu-header'>
    <ul>
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            userConectado ? handleLogout() : handleLoginClick();
          }}
          className={ userConectado ? 'logoutBtn' : 'loginBtn'} 
          data-testid='login-btn-header'          
        >
        <h2>{ userConectado ? 'Sair' : 'Entrar' }</h2>
        </button>
      </li>
      <li>
        <button
          onClick={() => navigate('/register')}
          style={{ display: userConectado ? 'none' : 'block' }}
          data-testid='register-btn-header'
        >
          Registrar-se
        </button>
      </li>
      <li>
        <button
          onClick={() => navigate('/about')}
          data-testid='about-btn-header'
        >
          About
        </button>
      </li>
    <li>
      <button
          onClick={() => navigate('/contact')}
          data-testid='contact-btn-header'
        >
          Contact
        </button>
    </li>
    <li>
      <button
        onClick={ () => setShowMenu(false) }
        data-testid='close-btn-header'
      >
        ❌
      </button>
    </li>
    </ul>
  </MenuHeader>
  )
}

export default MenuHeaderContent;
