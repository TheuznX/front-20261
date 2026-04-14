import Tabela from '../../components/Tabela/Tabela';

function Notas() {
  const colunas = ['Disciplina', 'A1', 'A2', 'Média', 'Situação'];

  return (
    <div>
      <h2>Minhas Notas</h2>
      <Tabela cabecalho={colunas}>
        <tr>
          <td>Análise de Sistemas</td>
          <td>8.0</td>
          <td>9.0</td>
          <td>8.5</td>
          <td style={{color: 'green'}}>Aprovado</td>
        </tr>
        <tr>
          <td>Programação Java</td>
          <td>7.5</td>
          <td>8.5</td>
          <td>8.0</td>
          <td style={{color: 'green'}}>Aprovado</td>
        </tr>
      </Tabela>
    </div>
  );
}

export default Notas;