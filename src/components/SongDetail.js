import React, { Component } from 'react';

const SongDetail = (props) => {
    return (
    <div className="song-info">
    <p>Title: {props.song['im:name']['label']}</p>
    <p>Artist: {props.song['im:artist']['label']}</p>
    <p>Chart Position: {props.index +1} </p>
    </div>
  )

}

export default SongDetail;
