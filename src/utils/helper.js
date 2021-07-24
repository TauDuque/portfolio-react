export const getUniqueValues = (data, type) => {
  let unique = data.map((uni) => uni[type]);
  return ["Todos", ...new Set(unique)];
};
