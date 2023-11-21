import { useNavigate } from "react-router-dom";
import { UserConnetedProps } from "../../type";
import { ErrUserConnectedContainer } from "./Style";

function ErrUserConnected (e: UserConnetedProps) {
  const navigate = useNavigate();
  return (
    <ErrUserConnectedContainer>
      <h3>Você já está logado!</h3>
      { e.userConnected.map((user) =>
        <div key={user.id}>
          <p>Logado como: <span>{user.nome} { user.sobrenome }</span></p>
        </div>
      ) }
      <button
        onClick={() => navigate('/')}
      >
        Inicio
      </button>         
    </ErrUserConnectedContainer>
  );
}

export default ErrUserConnected;
