import { useNavigate } from "react-router-dom";
import { Ico } from "./Style";
import { menuPontoIcon, profileIcon, searchIcon } from "../icons/Imports";
import { IconesHeaderProps } from "../../type";


function IconesHeader ({ showSearch, setShowSearch, setSearch, showMenu, setShowMenu }: IconesHeaderProps) {
  const navigate  = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate('/profile')}
        data-testid='profile-btn-icon'
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
        data-testid='search-btn-icon'
      >
        <Ico
          src={ searchIcon }
          alt="pesquisar"
        />
      </button>
      <button
        type="button"
        onClick={ () => setShowMenu(!showMenu) }
        data-testid='menu-btn-icon'
      >
        <Ico
          src={ menuPontoIcon }
          alt="menu"
        />
      </button>
    </>
  )
}

export default IconesHeader;
