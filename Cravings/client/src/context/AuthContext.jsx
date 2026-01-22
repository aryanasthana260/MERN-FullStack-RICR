import React, { useContext, useEffect, useState } from "react"; // imr to import react

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(JSON.parse);

  const [isLogin, setIsLogin] = useState(!!user);

  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = { user, setUser, isLogin, setIsLogin };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
