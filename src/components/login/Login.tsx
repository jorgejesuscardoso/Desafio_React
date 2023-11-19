/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux"
import { UserTypes } from "../../type";

function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isConnected, setConnected] = useState(false)
  const [userConnected, setUserConnected] = useState<UserTypes>()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const connectedUser = JSON.parse(localStorage.getItem('connected') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(users);
    if (connectedUser.connected) {
      users.find((user: any) => {
        if (user.id === connectedUser.id) {
          setUserConnected([user]);
        }
      }
      );
    }
   
  }, []);
  

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usersArray = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : [];

    const existingUser = usersArray.find((user: AnyAction) => user.email === email && user.senha === password);

    if (!existingUser) {
      setError(true);
      setErrorMsg('Usuário não cadastrado!');
      return;
    }

    const connectedUser = {
      id: existingUser.id,
      nome: existingUser.name,
      idade: existingUser.age,
      endereco: existingUser.address,
      foto: existingUser.thumb,
      email: existingUser.email,
      senha: existingUser.password,
      connected: true
    };
    
    localStorage.setItem('connected', JSON.stringify(connectedUser));
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
    <div>
      { userConnected && userConnected.length > 0 ? (
        <div>
          <p>Você já está logado!</p>
          {userConnected.map((user) => (
            <div key={user.id}>
              <p>Logado como: {user.nome} { user.sobrenome }</p>              
            </div>
          ))}
        </div>
      )         
       : (<form
          onSubmit={handleOnSubmit}
        >
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
          <button type='submit'>Logar</button>
        </form>)}
      <div>
        { error && <p>{errorMsg}</p> }
        { isConnected && <p>Logado com sucesso!</p>}
        { loading && <p>Carregando...</p>}
      </div>
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
    </div>
  )
}

export default Login
