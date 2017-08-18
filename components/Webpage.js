import React from 'react';
import FillerText from  './FillerText';

export default class Webpage extends React.Component{
  render(){
    return(
      <div>
      <h2>The world's coolest webpage</h2>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

