import React from "react";
import "./css/App.css";
import Sound from "./components/sound.js";
import Main from "./components/main.js";
import Audio from "./components/audio.js";
import Footer from "./components/footer.js";

const App = () => {
  return (
    <div className="container">
      <div className="wrap">
        <Audio />
        <Main />
      </div>
    </div>
  );
};

export default App;
