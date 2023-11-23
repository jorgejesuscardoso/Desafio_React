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
      </form>
    </>
  )
}

export default FormLogin
