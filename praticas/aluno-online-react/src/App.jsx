import Layout from './components/Layout/Layout';
import Notas from './pages/Notas/Notas';
import Dashboard from './pages/Dashboard/Dashboard'; 

function App() {
  return (
    <Layout nomeUsuario="Matheus Augusto">
      <Notas /> 
    </Layout>
  );
}

export default App;