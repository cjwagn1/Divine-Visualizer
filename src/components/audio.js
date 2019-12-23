import React from "react";

import "../css/main.css";

export const Audio = () => {
  return (
    <div className="center">
      <div>
        <input id="input" type="file" accept="audio/*" />
        <canvas id="canvas"></canvas>
        <audio id="audio" controls></audio>
      </div>
    </div>
  );
};

export default Audio;
