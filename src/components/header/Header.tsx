import { logoIcon } from "../icons/Imports";
import { useEffect, useState } from "react";
import TopFilter from "../buttons/TopFilterBtn";
import {
  HeaderContainer,
  Icones,
  Logo,
  TopFilterContainer} from "./Style";
import MenuHeaderContent from "./MenuHeader";
import SearchContent from "./SearchHeader";
import IconesHeader from "./IconesHeader";
import { useSelector } from "react-redux";
import { DarkModeType } from "../home/Home";

function Header () {
  const darkmode = useSelector((state: DarkModeType) => state.darkMode);
    
  const [showSearch, setShowSearch] = useState(false); 

  const [search, setSearch] = useState('');

  const [showMenu, setShowMenu] = useState(false); 

  const [userConectado, setUserConectado] = useState<boolean>(false); 

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(darkmode);
  }
  , [darkmode]);

  useEffect(() => {
    const user = localStorage.getItem('connected');
    if (user) { 
      setUserConectado(true);
    } else {
      setUserConectado(false);
    }
  }
  ,[userConectado]);
  return (
  <HeaderContainer className={ isDarkMode ? 'dark-mode-header' : '' }>
    <button
      onClick={ () => window.location.reload() }
      data-testid="btn-logo"
    >
      <Logo
        src={ logoIcon }
        alt="Logo"
        />
    </button>
    <Icones>
      <IconesHeader
        showSearch={ showSearch }
        setShowSearch={ setShowSearch }
        setSearch={ setSearch }
        showMenu={ showMenu }
        setShowMenu={ setShowMenu }
        isdarkmode={ isDarkMode }
      />
      { showSearch ? (
        <SearchContent
          showSearch={ showSearch }
          setShowSearch={ setShowSearch }
          search={ search }
          setSearch={ setSearch }
          isdarkmode={ isDarkMode }
        />
          ) : (   <></>
          )}
      { showMenu ? (
        <MenuHeaderContent
          userConectado={ userConectado }
          setUserConectado={ setUserConectado }
          setShowMenu={ setShowMenu }
          isdarkmode={ isDarkMode }
        />
      ) : ( <></> )}
    </Icones>
    <TopFilterContainer className={ isDarkMode ? "top-filter dark-mode" : "top-filter" }>
      <TopFilter />
    </TopFilterContainer>
  </HeaderContainer>
  );
}

export default Header;
