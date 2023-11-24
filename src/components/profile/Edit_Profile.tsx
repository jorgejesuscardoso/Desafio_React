import { useNavigate } from "react-router-dom";
import { UserTypes } from "../../type";
import { useEffect, useState } from "react";
import { 
  Container,
  EditButtonFooter,
  Main } from "./Style";
import ChangePhoto from "./ChangeFoto";
import CurrentInfo from "./CurrentInfo";
import EditValidateInfo from "./EditValidateInfo";
import EditAddressInfo from "./EditAddressInfo";

function EditProfile () {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserTypes>(); 
  const [newUserInfo, setNewUserInfo] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    foto: '',
    email: '',
    senha: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: ''
    }
  });
  const [showPass, setShowPass] = useState(false);
  const [confirmNewPass, setConfirmNewPass] = useState({ senha: ''});
  const [msgConfirmaSenha, setMsgConfirmaSenha] = useState(false);
  const [error, setError] = useState('');
  const [passError, setPassError] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const connectedUser = JSON.parse(localStorage.getItem('connected') || '{}');
    
    if (connectedUser.connected) {
      users.find((user: UserTypes[0]) => {
        if (user.id === connectedUser.id) {
          setUserInfo([user]);
        }
      }
      );
    }    
  },[]);

  useEffect(() => {

    if (newUserInfo.senha === confirmNewPass.senha) {
      setMsgConfirmaSenha(true);
    } else {
      setMsgConfirmaSenha(false);
    }
    if (newUserInfo.senha.length < 6) {
      setPassError('A senha deve ter no mínimo 6 caracteres');
    } else {
      setPassError('');
    }
    if (newUserInfo.senha === userInfo?.[0].senha) {
      setError('A nova senha deve ser diferente da senha atual');
    } else {
      setError('');
    }
  }, [newUserInfo.senha, confirmNewPass.senha, userInfo]);

  const handleNewData = () => {   
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const connectedUser = JSON.parse(localStorage.getItem('connected') || '{}');
    
    const newUsers = users.map((user: UserTypes[0]) => {
      if (user.id === connectedUser.id) {
        return {
          ...user,
          nome: newUserInfo.nome || user.nome,
          sobrenome: newUserInfo.sobrenome || user.sobrenome,
          idade: newUserInfo.idade || user.idade,
          foto: newUserInfo.foto || user.foto,
          senha: newUserInfo.senha || user.senha,
          email: newUserInfo.email || user.email,
          endereco: {
            ...user.endereco,
            rua: newUserInfo.endereco.rua || user.endereco.rua,
            numero: newUserInfo.endereco.numero || user.endereco.numero,
            bairro: newUserInfo.endereco.bairro || user.endereco.bairro,
            cidade: newUserInfo.endereco.cidade || user.endereco.cidade,
            estado: newUserInfo.endereco.estado || user.endereco.estado,
            pais: newUserInfo.endereco.pais || user.endereco.pais
          }
        }
      }
        return user;
    });
    // Atualiza os dados do usuário no localStorage com os novos valores
    localStorage.setItem('users', JSON.stringify(newUsers));
  }
  
  const handleShowPass = () => {
    setShowPass(!showPass);
  }

  return (
    <Main>
     {userInfo && userInfo.length > 0
      ? (
       <Container>
          <h3>Editar Perfil</h3>
          <form onSubmit={ handleNewData }>
           <ChangePhoto
              userInfo={ userInfo }
              newUserInfo={ newUserInfo }
              setNewUserInfo={ setNewUserInfo }
            />
            <div>
              <CurrentInfo
                userInfo={ userInfo }
                showPass={ showPass }
                handleShowPass={ handleShowPass }
              />
              <div>
                <h3>Novos dados:</h3>
                <div>
                  <EditValidateInfo
                    newUserInfo={ newUserInfo }
                    setNewUserInfo={ setNewUserInfo }
                    confirmNewPass={ confirmNewPass }
                    setConfirmNewPass={ setConfirmNewPass }
                    msgConfirmaSenha={ msgConfirmaSenha }
                  />
                  {passError && <p>{passError}</p>}
                  {error && <p>{error}</p>}
                  <h4>Endereço:</h4>
                 <EditAddressInfo
                    newUserInfo={ newUserInfo }
                    setNewUserInfo={ setNewUserInfo }
                  />
                </div>
              </div>
            </div>
          <EditButtonFooter>
            <button
              type="submit"
              data-testid='save-btn'
            >
              Salvar
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="logoutBtn"
              data-testid='cancel-btn'
            >
              Cancelar
            </button>
          </EditButtonFooter>
        </form>
      </Container>
  ) : 
  (
    <div>
      <h3>Você não está conectado</h3>
      <p>Fazer Login?:</p>
      <button onClick={() => navigate('/login')}>Login</button>
      <p>Criar uma conta?:</p>
      <button onClick={() => navigate('/register')}>Criar Conta</button>
      <p>Voltar a página inicial:</p>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
    )}
  </Main>
  )
}

export default EditProfile;
