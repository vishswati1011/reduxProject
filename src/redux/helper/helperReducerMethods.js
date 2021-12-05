export const loaderHelper = (data) => {
  return {
    type: "SET_LOADER",
    payload: data,
  };
};
export const loaderForIdea = (data) => {
  return {
    type: "SET_LOADER_FOR_IDEA",
    payload: data,
  };
};
