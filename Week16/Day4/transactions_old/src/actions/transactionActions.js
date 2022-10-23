export const insertElement = (data) => {
  return { type: "INSERT", payload: data };
};

export const updateElement = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};

export const deleteElement = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const updateIndex = (index) => {
  return {
    type: "UPDATE-INDEX",
    payload: index,
  };
};


