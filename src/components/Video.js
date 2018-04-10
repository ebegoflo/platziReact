import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component  {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=-LaY2-nM9kE&t=5s&index=1&list=PLa28R7QEiMblmIF4y_ydG4eRr5K4TcVyk' playing />

  }
}
// const Video = () => (
//   <h1>Hello, world!</h1>
// );

export default Video
