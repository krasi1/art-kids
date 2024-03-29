import React from "react";
import YouTube from "react-youtube";

class MovieClip extends React.Component {
  render() {
    const options = {
      height: "620",
      width: "1200",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <div>
        <h1 className="interviewTitle">
          <i>
            Успехите и неволите на един младши артист - Калина Динева,
            асистент-режисьор на "Студентското шоу"
          </i>
        </h1>
        <YouTube
          videoId="kasK-hLsTVA"
          //@ts-expect-error stop
          options={options}
          onReady={this._onReady}
          id="video"
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MovieClip;
