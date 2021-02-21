import React from 'react';
import './App.css';
import Section from "./Section";
import {Provider} from "react-redux";
import store from './store';
import {COLLAPSE_SECTION, EXPAND_SECTION} from "./store/section/actions";
import careers from "./careers";

function App() {
  const expand = () => {
    store.dispatch({type: EXPAND_SECTION});
  }

  const collapse = () => {
    store.dispatch({type: COLLAPSE_SECTION});
  }

  const careerNodes = Object.keys(careers);
  return (
    <div>
      <Provider store={store}>
        <h1>Gyeongmin Go</h1>
        <button onClick={() => expand()}>Expand All</button>
        <button onClick={() => collapse()}>Collapse All</button>
        {careerNodes.map(key => <Section key={key} node={careers[key]}/>)}
      </Provider>
    </div>
  );
}

export default App;
