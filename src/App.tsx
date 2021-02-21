import React from 'react';
import './App.css';
import Section from "./Section";
import {Provider} from "react-redux";
import store from './store';
import {COLLAPSE_SECTION, EXPAND_SECTION} from "./store/section/actions";
import careers from "./careers";

import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import {Button} from "react-bootstrap";
import "bootstrap/scss/bootstrap.scss";
import {Bio} from "./Bio";

function App() {
  const expand = () => {
    store.dispatch({type: EXPAND_SECTION});
  }

  const collapse = () => {
    store.dispatch({type: COLLAPSE_SECTION});
  }

  const careerNodes = Object.keys(careers);
  return (
    <Provider store={store}>
      <Bio />
      <Button onClick={() => expand()}><FaChevronDown/>Expand all</Button>
      <Button onClick={() => collapse()}><FaChevronUp/>Collapse all</Button>
      {careerNodes.map(key => <Section key={key} node={careers[key]}/>)}
    </Provider>
  );
}

export default App;
