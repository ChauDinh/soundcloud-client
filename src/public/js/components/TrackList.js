import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

class TrackList extends Component {
 render() {
  return (
   <div>
    {
     this.props.tracks.map((track, key) => {
      return <div key={key} >Track: {track.title}</div>
     })
    }
   </div>
  )
 }
};

function mapStateToProps(state) {
 const tracks = state.track;
 return { tracks }
}

export default connect(mapStateToProps)(TrackList);