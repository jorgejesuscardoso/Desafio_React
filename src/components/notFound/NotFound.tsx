function NotFound() {
    return (
      <div>
        <h1>Erro 404</h1>
        <h2>Página não encontrada</h2>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          style={ { position: 'fixed', top: '30%', left: '30%', width: 120, height: 30 } }
          className="loginBtn"
          data-testid="home-btn"
        >
          Voltar ao inicio
        </button>
      </div>
    );
}

export default NotFound;
