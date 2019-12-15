import React from "react";

import "../css/main.css";

export const Main = () => {
  window.onload = function() {
    var file = document.getElementById("input");
    var audio = document.getElementById("audio");

    file.onchange = function() {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
    };
  };

  return (
    <div className="center">
      <h1 className="font">Music Visualiztion</h1>
      <div>
        <button className="button">Upload</button>
        <input id="input" type="file" accept="audio/*" />
        <audio id="audio" controls></audio>
      </div>
    </div>
  );
};

export default Main;
