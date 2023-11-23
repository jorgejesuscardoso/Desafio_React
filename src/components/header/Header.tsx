
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

function Header () {
  
  const [showSearch, setShowSearch] = useState(false); 

  const [search, setSearch] = useState('');

  const [showMenu, setShowMenu] = useState(false); 

  const [userConectado, setUserConectado] = useState<boolean>(false); 

  const [user, setUser] = useState({ name: '', thumb: ''});

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
  <HeaderContainer>
    <button
      onClick={ () => window.location.reload() }
    >
      <Logo
        src={ logoIcon }
        alt="Logo"
        />
    </button>
    <Icones>
      <Link to='/profile'>
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
      />
      { showSearch ? (
        <SearchContent
          showSearch={ showSearch }
          setShowSearch={ setShowSearch }
          search={ search }
          setSearch={ setSearch }
        />
          ) : (   <></>
          )}
      { showMenu ? (
        <MenuHeaderContent
          userConectado={ userConectado }
          setUserConectado={ setUserConectado }
          setShowMenu={ setShowMenu }
        />
      ) : ( <></> )}
    </Icones>
    <TopFilterContainer className="top-filter">
      <TopFilter />
    </TopFilterContainer>
  </HeaderContainer>
  );
}

export default Header;
