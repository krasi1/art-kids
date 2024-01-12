import React from "react";
import YouTube from "react-youtube";
import "./App.css";

export default class Podcast extends React.Component {
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
            Изборът за следване в чужбина и реализацията в медиите и културата -
            разговор с Виктория Каменова
          </i>
        </h1>
        <YouTube
          videoId="9W9gKR1g79E"
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
