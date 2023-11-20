/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserTypes } from "../../type";

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
    <div>
      { userConnected
        ? (<div>
          <h1>Seu perfil</h1>
          <div>
            <img src={ userConnected[0].foto } alt={ userConnected[0].nome } />
            <div>
              <div>
                <h2>{ userConnected[0].nome } { userConnected[0].sobrenome }</h2>
                <h4>{ userConnected[0].idade } anos</h4>            
              </div>
              <button
                onClick={() => navigate('/profile/edit-profile')}
              >
                Editar Perfil
              </button>
            </div>
           <div>
              <h3>
                Endereço:                
              </h3>
              <p>Rua: { userConnected[0].endereco.rua }</p>
              <p>Número: { userConnected[0].endereco.numero }</p>
              <p>Bairro: { userConnected[0].endereco.bairro }</p>
              <p>Cidade: { userConnected[0].endereco.cidade }</p>
              <p>Estado: { userConnected[0].endereco.estado }</p>
              <p>País: { userConnected[0].endereco.pais }</p>
            </div>

          </div>
          <button onClick={ handleLogout }>Logout</button>
        </div>)
        : (
          <div>
            <h1>Você não está logado, faça login ou crie uma conta já!</h1>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Registrar</button>
          </div>) 
      }
      <button
        onClick={() => navigate('/')}
      >
        Inicio
      </button>
    </div>
  )
}

export default Profile;
