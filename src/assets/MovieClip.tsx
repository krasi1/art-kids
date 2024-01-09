import React from "react";
import YouTube from "react-youtube";


class MovieClip extends React.Component {
    render() {
      const options = {
        height: '620',
        width: '1200',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <YouTube videoId="Rs7u2TTPXFE" options={options} onReady={this._onReady} id="video"/>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;