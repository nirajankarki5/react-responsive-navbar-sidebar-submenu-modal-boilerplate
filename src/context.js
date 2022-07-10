import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
