import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function EmojiPedia(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}
function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="emojiDiv">{emojipedia.map(EmojiPedia)}</div>
    </div>
  );
}

export default App;
