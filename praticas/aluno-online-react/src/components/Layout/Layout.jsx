import Header from '../Header/Header'; // Faltava essa linha!
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar'; 
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-geral">
      <Header /> 
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