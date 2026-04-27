import { useState } from 'react';
import Input from '../../components/Input/Input';
import logo from '../../assets/learn.svg';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.email) {
      newErrors.email = "O campo de email é obrigatório.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Insira um e-mail válido.";
    }

    if (!formData.senha) {
      newErrors.senha = "O campo de senha é obrigatório.";
    } else if (formData.senha.length < 6) {
      newErrors.senha = "A senha deve ter no mínimo 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login realizado com sucesso!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>Aluno Online</h2>
        
        <Input 
          label="E-mail" 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          error={errors.email}
        />
        
        <Input 
          label="Senha" 
          type="password" 
          name="senha" 
          value={formData.senha} 
          onChange={handleChange} 
          error={errors.senha}
        />

        <button type="submit" className="btn-login">Entrar</button>
        
        <p className="footer-text">© 2026. Todos os direitos reservados.</p>
      </form>
    </div>
  );
}

export default Login;