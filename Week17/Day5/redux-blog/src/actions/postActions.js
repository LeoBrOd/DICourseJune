export const DELETE_POST = "DELETE_POST";

export const deletePost = (id) => {
  console.log(id);
  const action = {
    type: DELETE_POST,
    id,
  };
  return action;
};
