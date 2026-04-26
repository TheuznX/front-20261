import Card from '../../components/Card/Card';
import './Dashboard.css'; 

function Dashboard() {
  return (
    <div className="pagina-dashboard">
      <h1>Portal do Aluno</h1>
      
      
      <div className="dashboard-grid">
        <Card titulo="Faltas">
          <p>Você possui <strong>5</strong> faltas.</p>
        </Card>
        
        <Card titulo="Notas">
          <p>Sua média atual é <strong>8.5</strong>.</p>
        </Card>
        
        <Card titulo="Avisos">
          <p>Nenhum aviso pendente.</p>
        </Card>
      </div>
    </div>
  );
}
export default Dashboard;