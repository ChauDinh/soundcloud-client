import React, { Component, PropTypes } from "react";

export default class TrackList extends Component {
 render() {
  return (
   <div>
    {
     this.props.tracks.map((track, key) => {
      return <h1 key={key} >Track: {track.title}</h1>
     })
    }
   </div>
  )
 }
};