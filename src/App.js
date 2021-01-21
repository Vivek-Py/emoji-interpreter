import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [textInput, setTextInput] = useState("");

  const emojiDictionary = {
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "🙄": "Rolling Eyes",
    "😐": "annoyance",
    "😆": "squinting face"
  };

  const emojis = Object.keys(emojiDictionary);

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;

    let meaning = emojiDictionary[userInput];

    if (!meaning && userInput) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
    setTextInput(userInput);
  };

  const emojiClickHandler = (emoji) => {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  const resetHandler = (input) => {
    setMeaning("");
    setTextInput("");
  };

  return (
    <div className="App">
      <h1>
        Know Your <span className="yellow"> Emoji</span>
      </h1>

      <div className={"head"}>
        <h2>{meaning}</h2>
      </div>

      <div className="inputDiv">
        <input
          placeholder={"Enter an emoji here"}
          onChange={emojiInputHandler}
          value={textInput}
        />

        <button onClick={resetHandler}>Reset</button>
      </div>

      <h3>Know The meaning of these Emojis</h3>

      <div className="emojiDiv">
        {emojis.map((i) => {
          return (
            <span
              className="emojiBox"
              onClick={emojiClickHandler.bind(this, i)}
            >
              {i}
            </span>
          );
        })}
      </div>
    </div>
  );
}
