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
    <MenuHeader>
    <ul>
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            userConectado ? handleLogout() : handleLoginClick();
          }}
          className={ userConectado ? 'logoutBtn' : 'loginBtn'}           
        >
        { userConectado ? 'Sair' : 'Entrar' }
        </button>
      </li>
      <li>
        <button
          onClick={() => navigate('/register')}
          style={{ display: userConectado ? 'none' : 'block' }}
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
        onClick={ () => setShowMenu(false) }
      >
        ❌
      </button>
    </li>
    </ul>
  </MenuHeader>
  )
}

export default MenuHeaderContent;
