import { createContext } from "react";

export const ContextIdeas = createContext();

export const IdeasContextProvider = ({ children }) => {
  const createIdea = (user, idea_text) => {
    // Your implementation for creating an idea goes here
    // This is just a placeholder function
    console.log("Creating idea:", user, idea_text);
  };

  return (
    <ContextIdeas.Provider value={{ createIdea }}>
      {children}
    </ContextIdeas.Provider>
  );
};
