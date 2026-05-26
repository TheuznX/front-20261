import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Requerimentos() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Requerimentos</h2>
      
      <button 
        onClick={() => navigate('/requerimentos/novo')} 
        style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px', fontWeight: 'bold' }}
      >
        ➕ Novo Requerimento
      </button>

      <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '4px', backgroundColor: '#fff', marginBottom: '20px' }}>
        <p><strong>Segunda Chamada de Prova</strong> - Situação: Em análise</p>
      </div>

      <Outlet />
    </div>
  );
}