import React from "react";
import ReactDOM from "react-dom";
import TrackList from "./components/TrackList";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import * as actions from "../../actions";

const tracks = [
 {
  id: 1,
  title: "To All The Boys That I've Loved Before"
 },
 {
  id: 2,
  title: "A Man Learns Code"
 }
];

const store = configureStore(); 
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
 <Provider store={store}>
  <TrackList />
 </Provider>, document.getElementById("root")
);

