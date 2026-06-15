import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dadosUsuario) => {
    setAutenticado(true);
    setUsuario(dadosUsuario);
  };

  const logout = () => {
    setAutenticado(false);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};