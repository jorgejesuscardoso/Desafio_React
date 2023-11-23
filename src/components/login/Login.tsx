/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {
  getUserLocalStorage,
  setUserConnectedToLocalStorage,
  userConnected,
  users } from "../utils/Utils";
import ErrUserConnected from "./ErrUserConneted";
import { LoginType } from "../../type";
import {
  Container,
  LoginError} from "./Style";
import FormLogin from "./FormLogin";

function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isConnected, setConnected] = useState(false)
  const [isUserConnected, setUserConnected] = useState<any>()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (userConnected.connected) {
      users.find((user: any) => {
        if (isUserConnected && isUserConnected.id === user.id) {
          setUserConnected([user]);
        }
      }
      );
    }   
  }, [isUserConnected]);  

  const setLocalStorage = (existingUser: LoginType) => {
    const connectedUser = {
      id: existingUser.id,
      nome: existingUser.name,
      email: existingUser.email,
      senha: existingUser.senha,
      connected: true
    };
    
    setUserConnectedToLocalStorage('connected', connectedUser);
  };
  
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usersArray = getUserLocalStorage('users');

    const existingUser = usersArray.find((user: LoginType) => user.email === email && user.senha === password);

    if (!existingUser) {
      setError(true);
      setErrorMsg('Usuário não cadastrado!');
      return;
    }
    setLocalStorage(existingUser);
    setConnected(true);
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
    { userConnected && userConnected.length > 0 ? (
      <ErrUserConnected
        userConnected={ userConnected }
      />
    )         
      : <FormLogin
          email={ email }
          password={ password }
          setEmail={ setEmail }
          setPassword={ setPassword }
          handleOnSubmit={ handleOnSubmit }
          setError={ setError }
        />
      }
    <LoginError>
      { error && <p>{errorMsg}</p> }
      { isConnected && <p>Logado com sucesso!</p>}
      { loading && <p>Carregando...</p>}
    </LoginError>
  </Container>
 )
}

export default Login
