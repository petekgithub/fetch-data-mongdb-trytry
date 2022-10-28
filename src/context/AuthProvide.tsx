import React, { createContext, useState } from "react";
const AuthContext = createContext({}); 

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({children}) => {
  const [ auth, setAuth ] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

