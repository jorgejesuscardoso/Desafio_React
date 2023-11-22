/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LoginBtn } from "./LoginBtn";
import {
  getUserLocalStorage,
  setUserConnectedToLocalStorage,
  userConnected,
  users } from "../utils/Utils";
import ErrUserConnected from "./ErrUserConneted";
import { LoginType } from "../../type";
import {
  Container,
  FooterFormLogin,
  InputContainer, 
  LoginError} from "./Style";

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

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usersArray = getUserLocalStorage('users');

    const existingUser = usersArray.find((user: LoginType) => user.email === email && user.senha === password);

    if (!existingUser) {
      setError(true);
      setErrorMsg('Usuário não cadastrado!');
      return;
    }

    const connectedUser = {
      id: existingUser.id,
      nome: existingUser.name,
      email: existingUser.email,
      senha: existingUser.senha,
      connected: true
    };
    
    setUserConnectedToLocalStorage('connected', connectedUser);
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
      : (<form
        onSubmit={handleOnSubmit}
      > <h1>Login</h1>
        <InputContainer>
          <label htmlFor="login">E-mail:</label>
          <input
            value={email}
            onChange={(e) => (
              setEmail(e.target.value),
              setError(false) )}
            type='email'
            placeholder='Email'
            id="login"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value),
              setError(false)}}
            type='password'
            placeholder='Password'
            id="password"
            minLength={6}
            required
          />
          <LoginBtn />
        </InputContainer>

        <FooterFormLogin>
          <div>
            <button
              onClick={() => navigate('/register')}
            >
              Criar conta
            </button>
          </div>
          <button
            onClick={() => navigate('/')}
          >
            Voltar ao início
          </button>
        </FooterFormLogin>
      </form>)}
    <LoginError>
      { error && <p>{errorMsg}</p> }
      { isConnected && <p>Logado com sucesso!</p>}
      { loading && <p>Carregando...</p>}
    </LoginError>
  </Container>
 )
}

export default Login
