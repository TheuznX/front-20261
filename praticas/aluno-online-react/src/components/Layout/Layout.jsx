import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

function Layout({ children, nomeUsuario }) {
  return (
    <div className="layout-geral">
      <Header nomeUsuario={nomeUsuario} />
      <div className="corpo-projeto">
        <Sidebar>
          <Menu />
        </Sidebar>
        <main className="conteudo-dinamico">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;