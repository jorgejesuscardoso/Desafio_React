function Footer () {
  return (
    <footer className="footer">
    <div className="footer-container">
      <p>© Desenvolvido por Jorge de Jesus Cardoso, 2023</p>
      <p>Desafio React</p>
      <p>Front-end</p>
      <p>Todos os direitos reservados</p>

      <div className="social-media">
      <span className="span-footer">Minhas redes sociais</span>
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/jorgejesuscardoso/" 
              target="_blank"
              rel="noopener"
              title='media social LinkedIn'
              >
              Linkedin
              </a>
          </li>
          <li>
            <a href="https://github.com/jorgejesuscardoso"
              target="_blank"
              rel="noopener"
              title='media social Github'
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/tst.jorgecardoso/"
              target="_blank"
              rel="noopener"
              title='media social Facebook'
            >
              Facebook
              </a>
          </li>
            <li>
            <a href="https://www.instagram.com/jorge.bushido/"
              target="_blank"
              rel="noopener"
              title='media social Instagram'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
