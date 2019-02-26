import React, { Component } from 'react';
import Header from '../components/Header.js';
import ChartList from '../components/ChartList.js';
import Request from '../helpers/request.js';

class ChartBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new Request();
    request.get(url).then((data) => this.setState({ songs: data.feed.entry }))
  }

  render(){
    if(!this.state) {
      return <p>Loading data...</p>
    }
    console.log(this.state.songs);
    return (
      <div>
        <Header heading="Current Top 20 Songs in UK"/>
        <ChartList songs={this.state.songs} />
      </div>
    );
  }
}

export default ChartBox;
