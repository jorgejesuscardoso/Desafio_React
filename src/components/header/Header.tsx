
import { Link } from "react-router-dom";
import { SemFoto, logoIcon } from "../icons/Imports";
import { useEffect, useState } from "react";
import TopFilter from "../buttons/TopFilterBtn";
import {
  HeaderContainer,
  Icones,
  Logo,
  UserNameHeader,
  TopFilterContainer, 
  UserNameConnected} from "./Style";
import { getUserLocalStorage } from "../utils/Utils";
import MenuHeaderContent from "./MenuHeader";
import SearchContent from "./SearchHeader";
import IconesHeader from "./IconesHeader";
import { UserTypes } from "../../type";
import { useSelector } from "react-redux";
import { DarkModeType } from "../home/Home";

function Header () {
  const darkmode = useSelector((state: DarkModeType) => state.darkMode);
    
  const [showSearch, setShowSearch] = useState(false); 

  const [search, setSearch] = useState('');

  const [showMenu, setShowMenu] = useState(false); 

  const [userConectado, setUserConectado] = useState<boolean>(false); 

  const [user, setUser] = useState({ name: '', thumb: ''});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(darkmode);
  }
  , [darkmode]);

  useEffect(() => {
    const user = localStorage.getItem('connected');
    const userData = getUserLocalStorage('users');
    if (user) {      
      const mapUser = userData.map((u: UserTypes) => u).find((u: UserTypes[0]) => u.id === JSON.parse(user).id);
      setUserConectado(true);
      setUser({name: mapUser.nome, thumb: mapUser.foto});
    } else {
      setUserConectado(false);
      setUser({name: '', thumb: ''});
    }
  }
  ,[userConectado]);
  return (
  <HeaderContainer className={ isDarkMode ? 'dark-mode' : '' }>
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
      <Link to='/profile' data-testid='profile-btn'>
        <UserNameHeader>
          <img src={ user.thumb || SemFoto } alt="" />
          <UserNameConnected>
            {userConectado ? (<h2>{user.name}</h2>) : (<p>Você está deslogado!</p>)}
          </UserNameConnected>          
        </UserNameHeader>
      </Link>
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
