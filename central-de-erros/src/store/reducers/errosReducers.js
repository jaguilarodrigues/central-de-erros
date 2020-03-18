const initialState = {
  erroList: [],
  loading: true,
  erroHomologacao: [],
  erroProducao: [],
  erroDev: []
};

const ErrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true
      };

    case "GET_ERROS":
      const erro = action.payload;
      const producaoErrors = erro[0].erros;
      const homologacaoErrors = erro[1].erros;
      const devErrors = erro[2].erros;
      return {
        ...state,
        erroList: erro,
        erroProducao: producaoErrors,
        erroHomologacao: homologacaoErrors,
        erroDev: devErrors,
        loading: false
      };
    default:
      return state;
  }
};

export default ErrosReducer;
