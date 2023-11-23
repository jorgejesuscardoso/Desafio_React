import { AddressInfoProps } from "../../type";


function EditAddressInfo ({ newUserInfo, setNewUserInfo }: AddressInfoProps) {

  return (
    <>
      <label htmlFor="rua" style={{ marginLeft: 10 }}>Rua:</label>
      <input
        type="text"
        name="rua"
        id="rua"
        value={ newUserInfo.endereco.rua }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, rua: e.target.value } }) }
      />
      <label htmlFor="numero" style={{ marginLeft: 10 }}>Número:</label>
      <input
        type="number"
        name="numero"
        id="numero"
        value={ newUserInfo.endereco.numero }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, numero: String (e.target.value) } }) }
      /> 
      <label htmlFor="bairro" style={{ marginLeft: 10 }}>Bairro:</label>
      <input
        type="text"
        name="bairro"
        id="bairro"
        value={ newUserInfo.endereco.bairro }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, bairro: e.target.value } }) }
      />
      <label htmlFor="cidade" style={{ marginLeft: 10 }}>Cidade:</label>
      <input
        type="text"
        name="cidade"
        id="cidade"
        value={ newUserInfo.endereco.cidade }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, cidade: e.target.value } }) }
      />
      <label htmlFor="estado" style={{ marginLeft: 10 }}>Estado:</label>
      <input
        type="text"
        name="estado"
        id="estado"
        value={ newUserInfo.endereco.estado }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, estado: e.target.value } }) }
      />
      <label htmlFor="pais" style={{ marginLeft: 10 }}>País:</label>
      <input
        type="text"
        name="pais"
        id="pais"
        value={ newUserInfo.endereco.pais }
        onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, pais: e.target.value } }) }
      />
    </>
  )
}

export default EditAddressInfo;
