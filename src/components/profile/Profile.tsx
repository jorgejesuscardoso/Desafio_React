import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile () {
  const navigate = useNavigate();
  const register = localStorage.getItem('user');
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    if (register) {
      setIsRegister(true);
    }
  }, []);
  return (
    <div>
      { isRegister
        ? (<div>Profile</div>)
        : (
          <div>
            <p>Você não está registrado, crie uma conta já</p>
            <button onClick={() => navigate('/register')}>Criar conta</button>
          </div>) 
      }
    </div>
  )
}

export default Profile;
