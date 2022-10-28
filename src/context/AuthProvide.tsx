import React, { createContext, useState } from "react";

const AuthContext = createContext({}); 

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [ auth, setAuth ] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

