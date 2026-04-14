import './Header.css';

function Header() {
  return (
    <header className="header-principal">
      <div className="logotipo">
        <h1>Aluno Online</h1>
      </div>
      <div className="perfil-usuario">
        <span>Matheus</span> 
        <button className="botao-sair">Sair</button>
      </div>
    </header>
  );
}

export default Header;