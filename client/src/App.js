import React from "react";
require("dotenv").config();

const App = () => {
  return (
    <div>
      <h1>{process.env.REACT_APP_URL}</h1>
    </div>
  );
};

export default App;
