import { CurrentInfoProps } from "../../type";
import { ShowPassBTn } from "./Style";


function CurrentInfo ({ userInfo, showPass, handleShowPass }: CurrentInfoProps) {
  return (
    <>
      <div>
        <h3>Dados atuais:</h3>
        <p>Nome completo: <strong>{ userInfo[0].nome } { userInfo[0].sobrenome }</strong></p>
        <p>Idade: <strong>{ userInfo[0].idade } anos</strong></p>
        <p>Email: <strong>{ userInfo[0].email}</strong></p>
        <p>Senha: <strong>{ showPass ? (userInfo[0].senha) : '******' }</strong></p>
        <div>
          <ShowPassBTn
            type="button"
            onClick={ handleShowPass }
            data-testid='show-pass'
          >
            { showPass ? 'Esconder' : 'Mostrar'}
          </ShowPassBTn>
        </div>
      </div>
      <br/>
      <div>
        <p>
          Endereço:                
        </p>
        <p>Rua: { userInfo[0].endereco.rua }</p>
        <p>Número: { userInfo[0].endereco.numero }</p>
        <p>Bairro: { userInfo[0].endereco.bairro }</p>
        <p>Cidade: { userInfo[0].endereco.cidade }</p>
        <p>Estado: { userInfo[0].endereco.estado }</p>
        <p>País: { userInfo[0].endereco.pais }</p>
      </div>
    </>
  )
}

export default CurrentInfo;
