import { useEffect, useState } from "react"
import { AnyAction } from "redux"
import { SemFoto, logoIcon } from "../icons/Imports"
import { useNavigate } from "react-router-dom"
import { 
  Main,
  MsgErrDiv,
  ErrToRegister, 
  DivUserRegistered,
  Foto,
  Page2,
  NavigateBtn,
  PageNavigateBtn,
  HomeNavigateBtnDiv,
  Logo,
  BtnRegister,
  MsgHaveAccount,
  Page0and1,
  PagesContent,
  ErrMsgPage0,
  Page3} from "./Style";

function Register () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState({
    rua: '',
    numero: '',
    bairro:'',
    cidade: '',
    estado: '',
    pais: '',
  })
  const [thumb, setThumb] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [page, setPage] = useState(0)
  const [disable, setDisable] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error3, setError3] = useState('')

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      id: 0, 
      email: email,
      senha: password,
      nome: name,
      sobrenome: lastname,
      idade: age,
      endereco: address,
      foto: thumb,
    };

    const usersArray = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : [];

    if (usersArray.length > 0) {
      newUser.id = usersArray.length;
    }

    const existingUser = usersArray.find((user: AnyAction) => user.email === newUser.email);

    if (existingUser) {
      setError(true);
      setErrorMsg('Usuário já registrado!');
      setIsRegister(false);
      return;
    } 

    usersArray.push(newUser);

    localStorage.setItem('users', JSON.stringify(usersArray));
    setIsRegister(true);
    setError(false);
    setErrorMsg('');
  };
  useEffect(() => {
    if (page === 0) {
      if (password.length < 6 || password !== confirmPassword || email.includes('@') === false || email.includes('.com') === false) {
        setDisable(true);
      } else {
        setDisable(false)
        setError3('')
      }
      if (email.includes('@') === false || email.includes('.com') === false) {
        setError3('Formato de email inválido! Ex: user@gmail.com')
      } else {
        setError3('')
      }
    } else if (page === 1) {
      if (name.length < 3 || lastname.length < 3 || age.length < 2) {
        setDisable(true)
      } else {
        setDisable(false)
      }
    } else if (page === 2) {
      if (address.rua.length < 3 || address.numero === '' || address.bairro.length < 3 || address.cidade.length <3 || address.estado.length < 2 || address.pais.length < 3) {
        setDisable(true)
      } else {
        setDisable(false)
      }
    } else {
      setDisable(false)
    }
    if (disable !== false) {
      document.querySelector('.btn-next-and-prev-register')?.classList.add('btn-next-and-prev-register-active')
      
    } else {
      document.querySelector('.btn-next-and-prev-register')?.classList.remove('btn-next-and-prev-register-active')
    }
  },[page, email, password, name, lastname, age, address.rua, address.numero, address.bairro, address.cidade, address.estado, confirmPassword, disable, address.pais])

return (

  <Main>
    {page === 3 &&
      <Logo 
        src={ logoIcon }
        alt="logo"
      />         
      }
    <form
      onSubmit={handleOnSubmit}
      
    >
      { page === 0 ?  
      (
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
      </Page0and1>) 
      : page === 1 
      ? (
      <Page0and1>
        <img src={ logoIcon } alt="" style={{width: 150, margin: 'auto'}} />
        <PagesContent>
          <label htmlFor="name">Nome:</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Nome'
            id="name"
            required
          />
        </PagesContent>
        <PagesContent>
          <label htmlFor="lastname">Sobrenome:</label>
          <input
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Sobrenome'
            id="lastname"
            required
          />
        </PagesContent>
        <PagesContent>
          <label htmlFor="age">Idade:</label>
          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='number'
            placeholder='Idade'
            id="age"
            required
          />
        </PagesContent>
      </Page0and1>
      ) : page === 2
      ? (
      <Page2>

        <img
          src={ logoIcon }
          alt=""
        />        
        <PagesContent>
          <label htmlFor="street">Rua:</label>
          <input
          value={address.rua}
          onChange={(e) => {
            setAddress({...address, rua: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Rua'
          id="street"
          required
         />
       </PagesContent>
       <PagesContent>
          <label htmlFor="district">Bairro:</label>
          <input
            value={address.bairro}
            onChange={(e) => {
              setAddress({...address, bairro: e.target.value});
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Bairro'
            id="district"
            required
          />
      </PagesContent>
      <PagesContent>
        <label htmlFor="number">Número:</label>
        <input
          value={address.numero}
          onChange={(e) => {
            setAddress({...address, numero: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='number'
          placeholder='Número'
          id="number"
          required
        />
      </PagesContent>
      <PagesContent>
        <label htmlFor="city">Cidade:</label>
        <input
          value={address.cidade}
          onChange={(e) => {
            setAddress({...address, cidade: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Cidade'
          id="city"
          required
        />
      </PagesContent>
      <PagesContent>
        <label htmlFor="state">Estado:</label>
        <input
          value={address.estado}
          onChange={(e) => {
            setAddress({...address, estado: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Estado'
          id="state"
          required
        />
      </PagesContent>
      <PagesContent>        
        <label htmlFor="country">País:</label>
        <input
          value={address.pais}
          onChange={(e) => {
            setAddress({...address, pais: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='País'
          id="country"
        />
      </PagesContent>
      </Page2>
      ) : (
      <Page3>
        <Foto src={ SemFoto } alt="sem-foto" />
          <p>Gostaria de adicionar uma foto ao seu perfil ?</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="thumb">Foto:</label>
          <input
            value={thumb}
            onChange={(e) => {
              setThumb(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Url da foto'
            id="thumb"
          />
        </div>
        <BtnRegister
          type='submit'
          className="btn-form-register"
          disabled={ disable === true}
        >
          Registrar
        </BtnRegister>
      </Page3>)}
      <NavigateBtn>
        <PageNavigateBtn
          type='button'
          onClick={() => {
            setPage(page - 1),
            setError(false),
            setErrorMsg('')
          }}
          disabled={page === 0}
        >
            Anterior
        </PageNavigateBtn>
        <PageNavigateBtn
          type='button'
          onClick={() => setPage(page + 1)}
          disabled={page === 3 || disable === true}
          className={ disable ? 'inativeBtn' : ''}
        >
          Próximo
        </PageNavigateBtn>
        <HomeNavigateBtnDiv>
          <button
            type='button'
            onClick={ () => navigate('/') }
          >
            Home
          </button>
        </HomeNavigateBtnDiv>
      </NavigateBtn>
    </form>
    <MsgHaveAccount>
      <h4>Já possui conta?</h4>
      <button onClick={() => window.location.href = '/login'}>Login</button>
    </MsgHaveAccount>
    { isRegister &&

      <DivUserRegistered>
        <p>Registrado com sucesso!</p>
      </DivUserRegistered> }
    <MsgErrDiv>
      { error && 
      <ErrToRegister>
        <p>Erro ao registrar!</p>
        <p>{ errorMsg }</p>
      </ErrToRegister> }
    </MsgErrDiv>
  </Main>
  )
}

export default Register
