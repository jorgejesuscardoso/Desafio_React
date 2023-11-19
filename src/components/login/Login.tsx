import { useState } from "react"

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form>
        <label htmlFor="login">Login:</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text'
          placeholder='Email'
          id="login"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          id="password"
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
