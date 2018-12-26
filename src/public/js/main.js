import React from "react";
import ReactDOM from "react-dom";
import TrackList from "./components/TrackList"

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

ReactDOM.render(<TrackList tracks={tracks} />, document.getElementById("root"));