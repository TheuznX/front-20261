import './Input.css';

function Input({ label, type, name, value, onChange, error }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange}
        className={error ? 'input-error' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default Input;