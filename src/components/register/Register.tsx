import { useState } from "react"
import { AnyAction } from "redux"

function Register () {
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

    const existingUser = usersArray.find((user: AnyAction) => user.login === newUser.email);

    if (existingUser) {
      setError(true);
      setErrorMsg('Usuário já cadastrado!');
      setIsRegister(false);
      return;
    }

    usersArray.push(newUser);

    localStorage.setItem('users', JSON.stringify(usersArray));
    setIsRegister(true);
    setError(false);
    setErrorMsg('');
  };

  return (
    <div className="register-container">
      <form
        onSubmit={handleOnSubmit}
        
      >
        <label htmlFor="login">E-mail:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='email'
          id="login"
          required
        />
        <label htmlFor="password">Password:</label>
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
        <label htmlFor="number">Número:</label>
        <input
          value={address.numero}
          onChange={(e) => {
            setAddress({...address, numero: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Número'
          id="number"
          required
        />
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
        <label htmlFor="thumb">Foto:</label>
        <input
          value={thumb}
          onChange={(e) => {
            setThumb(e.target.value);
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Foto'
          id="thumb"
          required
        />
        <button type='submit'>Registrar</button>
      </form>
      <div>
        <h4>Já possui conta?</h4>
        <button onClick={() => window.location.href = '/login'}>Login</button>
      </div>
      { isRegister && <div><h1>Registrado com sucesso!</h1></div> }
      { error && <div>
        <h1>Erro ao registrar!</h1>
        <p>{ errorMsg }</p>
        </div> }
    </div>
  )
}

export default Register
