import {combineReducers, createStore} from "redux";
import sectionReducer from "./section/reducers";
import {devToolsEnhancer} from "redux-devtools-extension";
import {SectionState} from "./section/types";

const reducers = combineReducers({
  sections: sectionReducer
});

export type AppStates = {
  sections: SectionState
}

export default createStore(
  reducers,
  devToolsEnhancer({})
);