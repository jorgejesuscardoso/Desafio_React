import { ValidateInfoProps } from "../../type";
import { ConfirmPass, InputConfirmePass } from "./Style";



function ChangeValidateInfo ({ newUserInfo, setNewUserInfo, confirmNewPass, setConfirmNewPass, confirmaSenha }: ValidateInfoProps) {

  return (
    <>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={ newUserInfo.nome }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, nome: e.target.value }) }
      />
      <label htmlFor="sobrenome" style={{ marginLeft: 10 }}>Sobrenome:</label>
      <input
        type="text"
        name="sobrenome"
        id="sobrenome"
        value={ newUserInfo.sobrenome }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, sobrenome: e.target.value }) }
      />
      <label htmlFor="idade" style={{ marginLeft: 10 }}>Idade:</label>
      <input
        type="number"
        name="idade"
        id="idade"
        value={ newUserInfo.idade }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, idade: String(e.target.value) }) }
      />
      <label htmlFor="email" style={{ marginLeft: 10 }}>Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={ newUserInfo.email }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, email: e.target.value }) }
      />
      <label htmlFor="senha" style={{ marginLeft: 10 }}>Senha:</label>
      <input
        type="password"
        name="senha"
        id="senha"
        value={ newUserInfo.senha }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, senha: e.target.value }) }
        minLength={ 6 }
      />
      <label htmlFor="confirma" style={{ marginLeft: 10 }}>Confirme a senha</label>
      <ConfirmPass>
        <InputConfirmePass
          type="password"
          name="confirma"
          id="confirma"
          value={ confirmNewPass.senha }
          onChange={ (e) => setConfirmNewPass({ ...confirmNewPass, senha: e.target.value }) }
          minLength={ 6 }
          style={{ marginLeft: 10 }}

        />
        { !confirmaSenha ? <p>As senhas não coincidem</p> : '✅' }
      </ConfirmPass>
    </>
  )
}

export default ChangeValidateInfo;
