import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import { data } from "./projectsData";

import { FILTER_PROJECTS, SORT_PROJECTS } from "./action";

const initialState = {
  projects: [],
  filtered_projects: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterProjects = (category) => {
    const fullData = data;
    dispatch({ type: FILTER_PROJECTS, payload: { category, fullData } });
  };

  return (
    <AppContext.Provider value={{ ...state, filterProjects }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
