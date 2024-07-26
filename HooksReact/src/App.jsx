import { useState } from "react";
const now = new Date().toLocaleTimeString();

function App() {
  setInterval(showTime, 1000);
  const [time, setTime] = useState(now);
  function showTime() {
    const latestDate = new Date().toLocaleTimeString();
    setTime(latestDate);
  }

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export default App;
