import './Tabela.css';

function Tabela({ cabecalho, children }) {
  return (
    <table className="tabela-estilizada">
      <thead>
        <tr>
          {cabecalho.map((titulo, index) => (
            <th key={index}>{titulo}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Tabela;