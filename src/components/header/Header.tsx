/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { SemFoto, logoIcon, menuPontoIcon, profileIcon, searchIcon } from "../icons/Imports";
import { useEffect, useState } from "react";
import TopFilter from "../buttons/TopFilterBtn";
import {
  HeaderContainer,
  Ico,
  Icones,
  Logo,
  UserNameHeader,
  TopFilterContainer, 
  UserNameConnected} from "./Style";
import { getUserLocalStorage } from "../utils/Utils";
import MenuHeaderContent from "./MenuHeader";
import SearchContent from "./SearchHeader";

function Header () {
  const navigate = useNavigate();
  
  const [showSearch, setShowSearch] = useState(false); 

  const [search, setSearch] = useState('');

  const [showMenu, setShowMenu] = useState(false); 

  const [userConnectado, setUserConected] = useState<boolean>(false); 

  const [user, setUser] = useState({ name: '', thumb: ''});

  useEffect(() => {
    const user = localStorage.getItem('connected');
    const userData = getUserLocalStorage('users');
    if (user) {      
      const mapUser = userData.map((u: any) => u).find((u: any) => u.id === JSON.parse(user).id);
      setUserConected(true);
      setUser({name: mapUser.nome, thumb: mapUser.foto});
    } else {
      setUserConected(false);
      setUser({name: '', thumb: ''});
    }
  }
  ,[userConnectado]);
  console.log(userConnectado)
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
            {userConnectado ? (<h2>{user.name}</h2>) : (<p>Você está deslogado!</p>)}
          </UserNameConnected>
          
        </UserNameHeader>
      </Link>
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
      { showSearch ? (
        <SearchContent
          showSearch={ showSearch }
          setShowSearch={ setShowSearch }
          search={ search }
          setSearch={ setSearch }
        />
          ) : (
            <></>
          )
        }
      { showMenu ? (
        <MenuHeaderContent
          userConnectado={ userConnectado }
          setUserConnectado={ setUserConected }
          setShowMenu={ setShowMenu }
        />
      ) : (
        <></>
      )
      }
    </Icones>
    <TopFilterContainer className="top-filter">
      <TopFilter />
    </TopFilterContainer>
  </HeaderContainer>
  );
}

export default Header;
