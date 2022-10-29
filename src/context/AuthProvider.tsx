import React, { createContext, useState, useContext } from "react";

interface ContextProps {
  auth: any,
  setAuth: React.Dispatch<React.SetStateAction<any>>;
};

//Partial is like typescript utility class which makes all the values in object as optional
const AuthContext = createContext<Partial<ContextProps>>({ auth: '' });

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [ auth, setAuth ] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext;

