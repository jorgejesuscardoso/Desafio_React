/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserTypes } from "../../type";
import { SemFoto } from "../icons/Imports";

function Profile () {
  const navigate = useNavigate();
  const [userConnected, setUserConnected] = useState<UserTypes>();

  useEffect(() => {
    const connectedUser = JSON.parse(localStorage.getItem('connected') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (connectedUser.connected) {
      users.find((user: any) => {
        if (user.id === connectedUser.id) {
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
    <div className="profile-container">
      { userConnected
        ? (<div className="profile-data">
          <h1>Seu perfil</h1>
          <div className="profile-card-container">
            <img src={ userConnected[0].foto || SemFoto } alt={ userConnected[0].nome } />
            <div className="card-name">
              <div>
                <h2>{ userConnected[0].nome } { userConnected[0].sobrenome }</h2>
                <h4>{ userConnected[0].idade } anos</h4>            
              </div>
              <button
                onClick={() => navigate('/profile/edit-profile')}
              >
                Editar
              </button>
            </div>
           <div className="address-info-container">
              <h3>
                Endereço:                
              </h3>
              <p><b>Rua:</b> { userConnected[0].endereco.rua }</p>
              <p><b>Número:</b> { userConnected[0].endereco.numero }</p>
              <p><b>Bairro: </b>{ userConnected[0].endereco.bairro }</p>
              <p><b>Cidade:</b> { userConnected[0].endereco.cidade }</p>
              <p><b>Estado:</b> { userConnected[0].endereco.estado }</p>
              <p><b>País: </b>{ userConnected[0].endereco.pais }</p>
            </div>

          </div>
         <div className="profile-footer-btn">
          <button
              onClick={ handleLogout }
              className="logout-btn"
            >
              Logout
            </button>
            <button
              onClick={() => navigate('/')}
            >
              Inicio
            </button>
         </div>
        </div>)
        : (
          <div className="erro-msg-profile-logout">
            <h1>Você não está logado, faça login ou cadastre-se já! <br/> <span>É grátis!</span> </h1>
            <div className="erro-msg-profile-logout-btn">
              <button
                onClick={() => navigate('/login')}
              >
                  Login
              </button>
              <button
                onClick={() => navigate('/register')}
              >
                Criar
              </button>    
            </div>
            <button 
              onClick={() => navigate('/')} 
              className="erro-msg-profile-logout-btn-home"
            >
              Inicio
            </button>
           </div>) 
      }
    </div>
  )
}

export default Profile;
