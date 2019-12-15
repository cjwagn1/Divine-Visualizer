import React from "react";
import "./css/App.css";
import Main from "./components/main.js";
import Footer from "./components/footer.js";

const App = () => {
  return (
    <div className="container">
      <div className="wrap">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
