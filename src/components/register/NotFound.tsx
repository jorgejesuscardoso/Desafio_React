function NotFound() {
    return (
      <div>
        <h1>Erro 404</h1>
        <h2>Página não encontrada</h2>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Voltar ao inicio
        </button>
      </div>
    );
}

export default NotFound;
