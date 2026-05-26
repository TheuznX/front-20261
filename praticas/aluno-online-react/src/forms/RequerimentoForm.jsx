import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function RequerimentoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados do Requerimento:", data);
    reset(); 
    alert("Requerimento enviado com sucesso!");
    navigate('/requerimentos'); 
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', marginTop: '20px' }}>
      <h3>📝 Novo Requerimento</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Campo Tipo */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Tipo de Requerimento *</label>
          <select 
            {...register("tipo", { required: "O tipo de requerimento é obrigatório" })}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Selecione...</option>
            <option value="Segunda Chamada">Segunda Chamada de Prova</option>
            <option value="Trancamento">Trancamento de Disciplina</option>
            <option value="Declaração">Declaração de Matrícula</option>
          </select>
          {errors.tipo && <span style={{ color: 'red', fontSize: '14px' }}>{errors.tipo.message}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Descrição *</label>
          <textarea 
            {...register("descricao", { 
              required: "A descrição é obrigatória", 
              minLength: { value: 10, message: "A descrição deve ter no mínimo 10 caracteres" } 
            })}
            rows="4"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.descricao && <span style={{ color: 'red', fontSize: '14px' }}>{errors.descricao.message}</span>}
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Salvar
        </button>
      </form>
    </div>
  );
}