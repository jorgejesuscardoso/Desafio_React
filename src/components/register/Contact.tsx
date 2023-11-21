import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate('/')}
        style={{ marginTop: 50, marginLeft: "25%" }}
        className="home-btn"
      >
        Inicio
      </button>
      <main style={{textAlign: 'center', fontSize: '16px'}}>
        <section>
          <h1 style={{ marginTop: 50 }}>Contatos</h1>
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
      </main>
    </div>
  );
}

export default Contact;
