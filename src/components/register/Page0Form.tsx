import { Page0FormProps } from "../../type";
import { logoIcon } from "../icons/Imports";
import { ErrMsgPage0, Page0and1, PagesContent } from "./Style";


function Page0Form ({ email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error3, setError, setIsRegister}: Page0FormProps ) {

  return (
    <>
      <Page0and1>
        <img src={ logoIcon } alt="" style={{width: 150, margin: 'auto'}} />
        <h2>Formulário de Cadastro</h2>
        <PagesContent>
          <label htmlFor="login">E-mail:</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='email'
            placeholder='email'
            id="login"
            required
          />
        </PagesContent>
        <PagesContent>
          <label htmlFor="password">Senha:</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='password'
            placeholder='Password'
            id="password"
            minLength={6}
            required
          />
        </PagesContent>
        <PagesContent>
          <label htmlFor="confirme-pass">Confirme a senha:</label>
          <input
            type='password'
            placeholder='Confirme a senha'
            id="confirme-pass"
            minLength={6}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            required
          />
        </PagesContent>
      <ErrMsgPage0>
        { email !== '' && <p>{error3}</p>}
        { password !== confirmPassword && <p>As senhas não coincidem!</p>}
      </ErrMsgPage0>
      </Page0and1>
    </>
  )
}

export default Page0Form;
