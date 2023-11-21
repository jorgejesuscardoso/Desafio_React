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
      email: existingUser.email,
      senha: existingUser.senha,
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
    <main className="login-container">
      { userConnected && userConnected.length > 0 ? (
        <div className="user-logado">
          <h3>Você já está logado!</h3>
          {userConnected.map((user) => (
            <div key={user.id}>
              <p>Logado como: <span>{user.nome} { user.sobrenome }</span></p>
            </div>
          ))}
          <button
            onClick={() => navigate('/')}
          >
            Inicio
          </button>         
        </div>
      )         
       : (<form
          onSubmit={handleOnSubmit}
        > <h1>Login</h1>
          <div className="login-input">
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
          </div>
          <footer className="footer-form-login">
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
          </footer>
        </form>)}
      <div className="login-status">
        { error && <p>{errorMsg}</p> }
        { isConnected && <p>Logado com sucesso!</p>}
        { loading && <p>Carregando...</p>}
      </div>
    </main>
  )
}

export default Login
