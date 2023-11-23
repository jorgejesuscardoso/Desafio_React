
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {
  getUserLocalStorage,
  setUserConnectedToLocalStorage,
  users} from "../utils/Utils";
import { LoginType } from "../../type";
import {
  Container,
  ErrUserConnectedContainer,
  LoginError} from "./Style";
import FormLogin from "./FormLogin";

export interface UserInfo {
  id: number;
  nome: string;
  sobrenome: string;
}
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [conectou, setConectou] = useState(false);
  const [userJaConectado, setUserJaConectado] = useState<UserInfo>();
  const [loading, setLoading] = useState(false);
  
  const handleConnectedUser = () => {
    const taConectado = getUserLocalStorage('connected');
    if (taConectado) {
      const userInfo = users.find((user: LoginType) => user.id === taConectado.id);
      if(userInfo) {
        setUserJaConectado({
          id: userInfo.id,
          nome: userInfo.nome,
          sobrenome: userInfo.sobrenome
        });
      }
    }
  }
  useEffect(() => {
   handleConnectedUser();
  }, []);

  const setLocalStorage = (existeUser: LoginType) => {
    const connectedUser = {
      id: existeUser.id,
      nome: existeUser.name,
      email: existeUser.email,
      senha: existeUser.senha,
      connected: true
    };

    setUserConnectedToLocalStorage('connected', connectedUser);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usersArray = getUserLocalStorage('users');

    const existeUser = usersArray.find((user: LoginType) => user.email === email && user.senha === password);

    if (!existeUser) {
      setError(true);
      setErrorMsg('Usuário não cadastrado!');
      return;
    }
    setLocalStorage(existeUser);
    setConectou(true);
    setLoading(true);
    setError(false);
    setErrorMsg('');
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000);
  };
  return (
    <Container>
      {userJaConectado && userJaConectado ? (
          <ErrUserConnectedContainer>
          <h3>Você já está logado!</h3>
          { 
            <div key={userJaConectado.id}>
              <p>Logado como: <span>{userJaConectado.nome} { userJaConectado.sobrenome }</span></p>
            </div>
          }
          <button
            onClick={() => navigate('/')}
            className="loginBtn"
          >
            Inicio
          </button>         
        </ErrUserConnectedContainer>
      ) : (
        <FormLogin
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleOnSubmit={handleOnSubmit}
          setError={setError}
        />
      )}
      <LoginError>
        {error && <p>{errorMsg}</p>}
        {conectou && <p>Logado com sucesso!</p>}
        {loading && <p>Carregando...</p>}
      </LoginError>
    </Container>
  );
}

export default Login;
