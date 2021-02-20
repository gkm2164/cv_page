import React from 'react';
import './App.css';
import Section from "./Section";
import {Provider} from "react-redux";
import store from './store';
import {COLLAPSE_SECTION, EXPAND_SECTION} from "./store/section/actions";
import {careers} from "./careers";

function App() {
  const expand = () => {
    store.dispatch({type: EXPAND_SECTION});
  }

  const collapse = () => {
    store.dispatch({type: COLLAPSE_SECTION});
  }

  return (
    <div>
      <Provider store={store}>
        <h1>Gyeongmin Go</h1>
        <button onClick={() => expand()}>Expand All</button>
        <button onClick={() => collapse()}>Collapse All</button>
        <Section key={"work-experiences"}
                 node={careers["work-experiences"]}/>
        <Section key={"opensource-contributions"}
                 node={careers["opensource-contributions"]}/>
        <Section key={"educations"}
                 node={careers["educations"]}/>
        <Section key={"publications"}
                 node={careers["publications"]}/>
      </Provider>
    </div>
  );
}

export default App;
