import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button
        onClick={() => navigate('/')}
      >
        Inicio
      </button>
    </div>
  );
}

export default Contact;
