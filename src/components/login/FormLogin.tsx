import { useNavigate } from "react-router-dom"
import { LoginBtn } from "./LoginBtn"
import { FooterFormLogin, InputContainer } from "./Style"
import { FormLoginProps } from "../../type"



function FormLogin ({ email, setEmail, password, setPassword, setError, handleOnSubmit }: FormLoginProps) {
  const navigate = useNavigate()
  return (
    <>
      <form
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
            data-testid="email-input"
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
            data-testid="password-input"
            required
          />
          <LoginBtn />
        </InputContainer>
              
        <FooterFormLogin>
          <div>
            <button
              onClick={() => navigate('/register')}
              data-testid="register-btn"
            >
              Criar conta
            </button>
          </div>
          <button
            onClick={() => navigate('/')}
            data-testid="home-btn"
          >
            Voltar ao início
          </button>
        </FooterFormLogin>
      </form>
    </>
  )
}

export default FormLogin
