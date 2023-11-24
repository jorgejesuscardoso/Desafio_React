import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  
  return (
    <main style={{textAlign: 'center', fontSize: '16px'}}>
      <section>
        <h3 style={{ marginTop: 50, textAlign: 'center' }}>Contatos</h3>
        <span>
          Para mais informações entre em contato comigo através do: 
        </span>
        <br/>
          <ul>
            <li>
              <a 
                href="https://www.linkedin.com/in/jorgejesuscardoso/" 
                target="_blank"
                rel="noreferrer"
              >
                <h3>Linkedin</h3>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/jorgejesuscardoso"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Github</h3>
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/tst.jorgecardoso/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Facebook</h3>
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/jorge.bushido/"
                target="_blank"
              >
                <h3>Instagram</h3>
              </a>  
            </li>
          </ul>
        <h3>Ou mande um email para:</h3>
        <p style={{textAlign: 'center'}}>tst.jorgecardoso@gmail.com</p>
      </section>
    <button
      onClick={() => navigate('/')}
      style={{ marginTop: 150, margin: 'auto'}}
      className="home-btn"
      data-testid="home-btn"
    >
      Inicio
    </button>
    </main>
  );
}

export default Contact;
