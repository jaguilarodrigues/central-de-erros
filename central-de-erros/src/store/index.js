// import LoadingReducer from "./reducers/loadingReducer";
import errosReducer from "./reducers/errosReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  erros: errosReducer
});

export default rootReducer;
