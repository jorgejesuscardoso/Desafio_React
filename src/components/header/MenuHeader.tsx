import { useNavigate } from "react-router-dom";
import { MenuHeader } from "./Style";
import { MenuHeaderContentProps } from "../../type";


function MenuHeaderContent ({ userConnectado, setUserConnectado, setShowMenu }: MenuHeaderContentProps) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('connected');
    setUserConnectado(false);
  };

  const handleLoginClick = () => {
    if (!userConnectado) {
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
            userConnectado ? handleLogout() : handleLoginClick();
          }}
          className={ userConnectado ? 'logoutBtn' : 'loginBtn'}           
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
