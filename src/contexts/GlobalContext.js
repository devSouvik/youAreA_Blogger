import { createContext, useState } from "react";

const initialGlobalState = {
  user: {},
  updateUser: (user) => {},
};

export const GlobalContext = createContext(initialGlobalState);

function GlobalContextProvider({ children }) {
  const [user, setUser] = useState(0);
  const updateUser = (value) => {
    setUser(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
