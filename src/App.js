import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "🔥": "Fire",
  "❤️": "Red Heart",
  "💀": "Skull",
  "✅": "Check Mark Button",
  "💯": "Hundred Points"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [Meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var Meaning = emojiDictionary[userInput];
    if (Meaning === undefined) {
      Meaning = "we donot have this emoji in our database";
    }
    setMeaning(Meaning);
  }
  function emojiClickHandler(emoji) {
    var Meaning = emojiDictionary[emoji];
    setMeaning(Meaning);
  }

  return (
    <div className="App">
      <h1>Emoji</h1>
      <input onChange={() => emojiInputHandler}></input>
      <h2> Meaning {Meaning} </h2>
      <h3>Emojis we knows</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            keys={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
