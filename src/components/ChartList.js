import React, { Component } from 'react';
import SongDetail from './SongDetail';

class ChartList extends Component {

  render() {
    if(!this.props){
      return <p>Waiting for data to load...</p>
    }
    const chartItems = this.props.songs.map((song, index) => {
      return (
        <SongDetail song={song} index={index}/>
      );
    })
    return (
      <div className='song-list'>
      <ul>
        {chartItems}
      </ul>
      </div>
    );
  }
}


export default ChartList;
