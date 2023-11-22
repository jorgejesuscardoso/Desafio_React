/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { UserTypes } from "../../type";
import { useEffect, useState } from "react";
import { SemFoto } from "../icons/Imports";
import { Container, EditButtonFooter, Main, ShowPassBTn } from "./Style";

function EditProfile () {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserTypes>(); 
  const [newUserInfo, setNewUserInfo] = useState({
    nome: '',
    sobrenome: '',
    idade: 0,
    foto: '',
    email: '',
    senha: '',
    endereco: {
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
      estado: '',
      pais: ''
    }
  });
  const [showPass, setShowPass] = useState(false);
  const [confirmNewPass, setConfirmNewPass] = useState({ senha: ''});
  const [confirmaSenha, setConfirmaSenha] = useState(false);
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const connectedUser = JSON.parse(localStorage.getItem('connected') || '{}');
    
    if (connectedUser.connected) {
      users.find((user: any) => {
        if (user.id === connectedUser.id) {
          setUserInfo([user]);
        }
      }
      );
    }
    
  },[]);
  useEffect(() => {

    if (newUserInfo.senha === confirmNewPass.senha) {
      setConfirmaSenha(true);
    } else {
      setConfirmaSenha(false);
    }
    if (newUserInfo.senha.length < 6) {
      setError2('A senha deve ter no mínimo 6 caracteres');
    } else {
      setError2('');
    }
    if (newUserInfo.senha === userInfo?.[0].senha) {
      setError('A nova senha deve ser diferente da senha atual');
    } else {
      setError('');
    }
  }, [newUserInfo.senha, confirmNewPass.senha, userInfo]);

  const handleNewsData = () => {   
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const connectedUser = JSON.parse(localStorage.getItem('connected') || '{}');
    
    const newUsers = users.map((user: any) => {
     if (user.id === connectedUser.id) {
      return {
        ...user,
        nome: newUserInfo.nome || user.nome,
        sobrenome: newUserInfo.sobrenome || user.sobrenome,
        idade: newUserInfo.idade || user.idade,
        foto: newUserInfo.foto || user.foto,
        senha: newUserInfo.senha || user.senha,
        email: newUserInfo.email || user.email,
        endereco: {
          ...user.endereco,
          rua: newUserInfo.endereco.rua || user.endereco.rua,
          numero: newUserInfo.endereco.numero || user.endereco.numero,
          bairro: newUserInfo.endereco.bairro || user.endereco.bairro,
          cidade: newUserInfo.endereco.cidade || user.endereco.cidade,
          estado: newUserInfo.endereco.estado || user.endereco.estado,
          pais: newUserInfo.endereco.pais || user.endereco.pais
        }
      }
    }

    return user;
  });
  // Atualiza os dados do usuário no localStorage com os novos valores
  localStorage.setItem('users', JSON.stringify(newUsers));
  }

  const handleShowPass = () => {
    setShowPass(!showPass);
  }

  return (
    <Main>
     {userInfo && userInfo.length > 0
      ? (
       <Container>
          <h1>Editar Perfil</h1>
          <form onSubmit={ handleNewsData }>
           <img src={ userInfo[0].foto || SemFoto } alt={ userInfo[0].nome } />
         
            <div>
              <label htmlFor="foto">URL da nova foto:</label>
              <input
                type="text"
                name="foto"
                id="foto"
                value={ newUserInfo.foto }
                onChange={ (e) => setNewUserInfo({ ...newUserInfo, foto: e.target.value }) }
              />
            </div>
            <div>
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
              <div>
                <h3>Novos dados:</h3>
                <div>
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
                    onChange={ (e) => setNewUserInfo({ ...newUserInfo, idade: Number(e.target.value) }) }
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
                  <div className="confirma-senha-cont">
                  <input
                    type="password"
                    name="confirma"
                    id="confirma"
                    value={ confirmNewPass.senha }
                    onChange={ (e) => setConfirmNewPass({ ...confirmNewPass, senha: e.target.value }) }
                    minLength={ 6 }
                    style={{ marginLeft: 10 }}
                  />
                  { !confirmaSenha ? <p>As senhas não coincidem</p> : '✅' }
                  </div>
                  {error2 && <p>{error2}</p>}
                  {error && <p>{error}</p>}
                  <h4>Endereço:</h4>
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
                    onChange={ (e) => setNewUserInfo({ ...newUserInfo, endereco: { ...newUserInfo.endereco, numero: Number(e.target.value) } }) }
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
                </div>
              </div>
            </div>
          <EditButtonFooter>
            <button type="submit">Salvar</button>
            <button
              onClick={() => navigate('/profile')}
              className="logoutBtn"
            >
              Cancelar
            </button>
          </EditButtonFooter>
        </form>
      </Container>
  ) : 
  (
    <div>
      <h3>Você não está conectado</h3>
      <p>Fazer Login?:</p>
      <button onClick={() => navigate('/login')}>Login</button>
      <p>Criar uma conta?:</p>
      <button onClick={() => navigate('/register')}>Criar Conta</button>
      <p>Voltar a página inicial:</p>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
    )}
  </Main>
  )
}

export default EditProfile;
