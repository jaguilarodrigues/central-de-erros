export const loadingAction = () => {
  return {
    type: "LOADING"
  };
};

export const getErros = erroObj => {
  return {
    type: "GET_ERROS",
    payload: erroObj
  };
};
