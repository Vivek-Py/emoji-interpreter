import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var meaning;
  const emoDict = {
    "💌": "love letter",
    "😀": "grinning face",
    "🥳": "partying face",
    "🥰": "smiling face with hearts"
  };

  var emojiArray = Object.keys(emoDict);
  const [inMeaning, setMeaning] = useState("Nothing entered/selected");

  function changeHandler(event) {
    var inputEmoji = event.target.value;
    meaning = emoDict[inputEmoji];
    if (meaning === undefined) {
      setMeaning("Not in our dictionary!");
    } else {
      setMeaning(meaning);
    }
  }

  function clickHandler(emoji) {
    setMeaning(emoDict[emoji]);
  }

  return (
    <div className="App">
      <input
        className="inputBox"
        onChange={changeHandler}
        placeholder="Enter your emoji here!"
      />
      <div className="meaningDiv">{inMeaning}</div>
      <div className="emojiCollection">
        {emojiArray.map((emoji) => {
          return (
            <span
              className="emojiList"
              onClick={() => clickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
