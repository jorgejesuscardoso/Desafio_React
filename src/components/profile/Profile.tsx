
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserTypes } from "../../type";
import { SemFoto } from "../icons/Imports";
import { 
  CardInfo,
  CardName,
  DeletPerfilBtn,
  FooterBtn,
  HomeButton,
  MsgErro,
  MsgErroNotLogged,
  ProfileCardContainer,
  ProfileContainer,
  ProfileMain,} from "./Style";
import { removeUserConnectedToLocalStorage, removeUserLocalStorage } from "../utils/Utils";

function Profile () {
  const navigate = useNavigate();
  const [userConnected, setUserConnected] = useState<UserTypes>();

  useEffect(() => {
    const taConectado = JSON.parse(localStorage.getItem('connected') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (taConectado.connected) {
      users.find((user: UserTypes[0]) => {
        if (user.id === taConectado.id) {
          setUserConnected([user]);
        }
      }
      );
    }
   
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('connected');
    navigate('/login');
  }
  return (
    <ProfileMain>
      { userConnected
        ? (<ProfileContainer>
          <h1>Seu perfil</h1>
          <ProfileCardContainer>
            <img src={ userConnected[0].foto || SemFoto } alt={ userConnected[0].nome } />
            <CardName>
              <div>
                <h2>{ userConnected[0].nome } { userConnected[0].sobrenome }</h2>
                <h4>{ userConnected[0].idade } anos</h4>            
              </div>
              <button
                onClick={() => navigate('/profile/edit-profile')}
                data-testid='edit-profile-btn'
              >
                Editar
              </button>
            </CardName>
           <CardInfo>
              <p>Endereço:</p>
              <p><b>Rua:</b> { userConnected[0].endereco.rua }</p>
              <p><b>Número:</b> { userConnected[0].endereco.numero }</p>
              <p><b>Bairro: </b>{ userConnected[0].endereco.bairro }</p>
              <p><b>Cidade:</b> { userConnected[0].endereco.cidade }</p>
              <p><b>Estado:</b> { userConnected[0].endereco.estado }</p>
              <p><b>País: </b>{ userConnected[0].endereco.pais }</p>
              <p><b>Deletar Perfil:</b> <strong style={ { color: 'red' } }>Não tem volta!</strong></p>
              <DeletPerfilBtn
                onClick={() => {
                  removeUserLocalStorage(userConnected[0].id),
                  removeUserConnectedToLocalStorage('connected'),
                  navigate('/')
                } }
                data-testid='delete-profile-btn'
              >
                Deletar Perfil
              </DeletPerfilBtn>
            </CardInfo>
                <h1>Em construção!</h1>
          </ProfileCardContainer>
         <FooterBtn>
          <button
              onClick={ handleLogout }
              className="logoutBtn"
              data-testid='logout-btn'
            > 
              Logout
            </button>
            <button
              onClick={() => navigate('/')}
              className="homeBtn"
            >
              Inicio
            </button>
         </FooterBtn>
        </ProfileContainer>)
        : (
          <MsgErroNotLogged>
            <h1>Você não está logado, faça login ou cadastre-se já! <br/> <span>É grátis!</span> </h1>
            <MsgErro>
              <button
                onClick={() => navigate('/login')}
                data-testid='login-btn'
              >
                  Login
              </button>
              <button
                onClick={() => navigate('/register')}
                data-testid='register-btn'
              >
                Criar
              </button>    
            </MsgErro>
            <HomeButton 
              onClick={() => navigate('/')} 
              data-testid='home-btn'
            >
              Inicio
            </HomeButton>
           </MsgErroNotLogged>) 
      }
    </ProfileMain>
  )
}

export default Profile;
