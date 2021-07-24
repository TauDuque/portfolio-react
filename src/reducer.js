import { FILTER_PROJECTS } from "./action";

const reducer = (state, action) => {
  if (action.type === FILTER_PROJECTS) {
    const { category, fullData } = action.payload;
    if (category === "Full Stack") {
      const filteredData = fullData.filter(
        (proj) => proj.category === category
      );
      return { ...state, projects: fullData, filtered_projects: filteredData };
    }
    if (category === "React") {
      const filteredData = fullData.filter(
        (proj) => proj.category === category
      );
      return { ...state, projects: fullData, filtered_projects: filteredData };
    }
    if (category === "Vanilla JavaScript") {
      const filteredData = fullData.filter(
        (proj) => proj.category === category
      );
      return { ...state, projects: fullData, filtered_projects: filteredData };
    }
    if (category === "Todos") {
      return { ...state, projects: fullData, filtered_projects: fullData };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
