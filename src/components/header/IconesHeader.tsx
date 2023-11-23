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
    </>
  )
}

export default IconesHeader;
