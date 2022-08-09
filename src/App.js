import React from "react";
import './App.css';
import {applyMiddleware, createStore} from "redux";
import promiseReducer from "./components/PromiseReducer";
import thunk from "redux-thunk";
import actionPromise from "./components/ActionPromise";
import fetchData from "./components/FetchData";
import Hero from "./components/PeopleInstance";
import Film from "./components/FilmInstance";
import {Provider, connect} from "react-redux";


const store = createStore(promiseReducer, applyMiddleware(thunk));

const urlHero = "https://swapi.dev/api/people/10";
const urlFilm = "https://swapi.dev/api/films/1/";

store.dispatch(actionPromise('ObiWan', fetchData(urlHero)));
store.dispatch(actionPromise('Film', fetchData(urlFilm)));
store.subscribe(() => console.log(store.getState()));

const ConnectHero = connect((state) => state.ObiWan || {})(Hero);
const ConnectFilm = connect((state) => state.Film || {})(Film);

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <ConnectHero />
          <ConnectFilm />
        </div>
      </Provider>
  );
}

export default App;
