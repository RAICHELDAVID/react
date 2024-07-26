import React, { useState } from "react";
import Form from "./component/Form";
var registered = false;
function App() {
  return (
    <div className="container">
      <Form isRegistered={registered} />
    </div>
  );
}

export default App;
