import React from "react";
import Soundout from "./soundout.js";
import Sound from "./sound.js";

import "../css/main.css";
var soundT;

export const Main = () => {
  window.onload = function() {
    var file = document.getElementById("input");
    var audio = document.getElementById("audio");

    file.onchange = function() {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();

      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 1024;

      var bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);

      var dataArray = new Uint8Array(bufferLength);

      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;

      var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#1a1a1d";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          var r = barHeight + 90 * (i / bufferLength);
          var g = 250 * (i / bufferLength);
          var b = 90;

          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

          ctx.fillRect(x, barHeight * 2.3, (barWidth * 1) / 2, barHeight);

          x += barWidth + 1;
        }
      }

      audio.play();
      renderFrame();
    };
  };

  if (1 == 1) {
    soundT = <Sound />;
  } else {
    soundT = <Soundout />;
  }

  return <div>{soundT}</div>;
};

export default Main;
// audio.paused && audio.currentTime > 0 && !audio.ended
