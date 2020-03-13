const initialState = {
  erroList: [],
  loading: false,
  option: 0,
  erroAmbiente: []
};

const ErrosReducer = (state = initialState, action) => {
  const { type, item } = action;
  switch (action.type) {
    case "LOADING":
      return {
        loading: true
      };

    case "GET_ERROS":
      const erros = action.payload;
      const ambientErrors = erros[0].erros;
      return {
        ...state,
        erroList: erros,
        erroAmbiente: ambientErrors,
        loading: false
      };
    case "GET_OPTION":
      const position = action.payload;
      const ambientList = state.erroList[position].ambiente;
      const ambientErrorsOption = state.erroList[position].erros;
      return {
        ...state,
        option: position,
        ambientes: ambientList,
        erroAmbiente: ambientErrorsOption
      };
    default:
      return state;
  }
};

export default ErrosReducer;
