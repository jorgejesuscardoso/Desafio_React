import { useNavigate } from "react-router-dom"
import { DivUserRegistered } from "./Style"

function PopUp () {
  const navigate = useNavigate()
  return (
    <>
      <DivUserRegistered>
        <p>Registrado com sucesso!</p>
        <p>Faça login para acessar sua conta.</p>
        <button onClick={ () => navigate('/login') }>Login</button>
      </DivUserRegistered> 
    </>
  )
}

export default PopUp
