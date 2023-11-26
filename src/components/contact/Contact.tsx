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
             <h3>Linkedin: {' '}
                <a 
                  href="https://www.linkedin.com/in/jorgejesuscardoso/" 
                  target="_blank"
                  rel="noreferrer"
                  style={{color: 'blue'}}
                >
                  https://www.linkedin.com/in/jorgejesuscardoso/
                </a>
              </h3>
            </li>
            <li>
              <h3>Github: {' '}
                
                <a 
                  href="https://github.com/jorgejesuscardoso"
                  target="_blank"
                  rel="noreferrer"
                  style={{color: 'blue'}}
                > 
                   https://github.com/jorgejesuscardoso
                </a>
              </h3>
            </li>
            <li>
              <h3>Facebook: {' '}
                <a 
                  href="https://www.facebook.com/tst.jorgecardoso/"
                  target="_blank"
                  rel="noreferrer"
                  style={{color: 'blue'}}
                >
                  https://www.facebook.com/tst.jorgecardoso/
                </a>
              </h3>
            </li>
            <li>
              <h3>Instagram: {' '}
                <a 
                  href="https://www.instagram.com/jorge.bushido/"
                  target="_blank"
                  rel="noreferrer"
                  style={{color: 'blue'}}
                >
                  https://www.instagram.com/jorge.bushido/
                </a>
              </h3>
            </li>
          </ul>
        <h3 style={{ textAlign: 'center' }} >Ou mande um email para:</h3>
        <br />
        <p style={{textAlign: 'center'}}>tst.jorgecardoso@gmail.com</p>
        <br />
        <br />
      </section>
    <button
      onClick={() => navigate('/')}
      className="home-btn"
      data-testid="home-btn"
      style={{ marginTop: 50, margin: 'auto', width: '100px', height: '40px' }}
    >
      Inicio
    </button>
    </main>
  );
}

export default Contact;
