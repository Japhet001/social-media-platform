import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [ideas, setIdeas] = useState(JSON.parse(localStorage.getItem("ideas")) || null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const login = (data) => {
    // Your implementation for login goes here
    // This is just a placeholder function
    console.log("Logging in:", data);
    // Update the user state with the logged-in user
    setUser(data);
  };

  return (
    <Context.Provider value={{ login, user, setUser, ideas, setIdeas }}>
      {children}
    </Context.Provider>
  );
};
