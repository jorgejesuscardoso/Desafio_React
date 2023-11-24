/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { AnyAction } from "redux"
import { logoIcon } from "../icons/Imports"
import { 
  Main,
  MsgErrDiv,
  ErrToRegister, 
  Logo,
  MsgHaveAccount } from "./Style";
import { getUserLocalStorage, setNewUserToLocalStorage } from "../utils/Utils";
import Page0Form from "./Page0Form";
import Page1Fom from "./Page1Form";
import Page2Form from "./Page2Form";
import Page3Form from "./Page3Form";
import NavigateBtns from "./NavigateBtn";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";

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

  type Address = {
    email: string,  
  }
  // Esse any não é o ideal, mas não consegui resolver o problema de tipagem
  const handleNewUser = (newUser: Address, usersArray: any) => {

      const existeUser = usersArray.find((user: AnyAction) => user.email === newUser.email);

    if (existeUser) {
      setError(true);
      setErrorMsg('Usuário já registrado!');
      setIsRegister(false);
      return;
    } 
    usersArray.push(newUser);
    setNewUserToLocalStorage(usersArray)
    setIsRegister(true);
    setError(false);
    setErrorMsg('');
  }


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

    const usersArray = getUserLocalStorage('users');

    if (usersArray.length > 0) {
      newUser.id = usersArray.length;
    }
    handleNewUser(newUser, usersArray);   
  };

  const handleDisable = () => {
    if (disable !== false) {
      document.querySelector('.btn-next-and-prev-register')?.classList.add('btn-next-and-prev-register-active')
      
    } else {
      document.querySelector('.btn-next-and-prev-register')?.classList.remove('btn-next-and-prev-register-active')
    }
  }

  const handlePage0 = () => {
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
  }
  const handlePage1 = () => {
    if (name.length < 3 || lastname.length < 3 || age.length < 2) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }
  const handlePage2 = () => {
    if (address.rua.length < 3 || address.numero === '' || address.bairro.length < 3 || address.cidade.length <3 || address.estado.length < 2 || address.pais.length < 3) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }
  useEffect(() => {
    if (page === 0) {
     handlePage0()
    } else if (page === 1) {
     handlePage1()
    } else if (page === 2) {
      handlePage2()
    } else {
      setDisable(false)
    }
    handleDisable()
  },[page, email, password, name, lastname, age, address.rua, address.numero, address.bairro, address.cidade, address.estado, confirmPassword, disable, address.pais])

  const handlePopUp = () => {
    if (isRegister) {
      return (
        <PopUp />
      )
    }
  }

return (

  <Main>
    {page === 3 && <Logo src={ logoIcon } alt="logo" /> }
    <form
      onSubmit={handleOnSubmit}
      data-testid="form-register"  
    >
      { page === 0 ?  
        <Page0Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          error3={error3}
          setError={setError}
          setIsRegister={setIsRegister}
        /> 
      : page === 1 
      ? (
      <Page1Fom
        name={name}
        setName={setName}
        lastname={lastname}
        setLastname={setLastname}
        age={age}
        setAge={setAge}
        setError={setError}
        setIsRegister={setIsRegister}
      />
      ) : page === 2
      ? (
      <Page2Form
        address={address}
        setAddress={setAddress}
        setError={setError}
        setIsRegister={setIsRegister}
      />
      ) : <Page3Form
            thumb={thumb}
            setThumb={setThumb}
            setError={setError}
            setIsRegister={setIsRegister}
            disable={disable}
          />
      }
     <NavigateBtns
        page={page}
        setPage={setPage}
        disable={disable}
        setError={setError}
        setErrorMsg={setErrorMsg}
      />

    </form>
    <MsgHaveAccount>
      <h4>Já possui conta?</h4>
      <button onClick={() => navigate('/')}>Login</button>
    </MsgHaveAccount>
    { handlePopUp() }
    <MsgErrDiv>
      { error && 
        <ErrToRegister>
          <p>Erro ao registrar!</p>
          <p>{ errorMsg }</p>
        </ErrToRegister>
      }
    </MsgErrDiv>
  </Main>
  )
}

export default Register
