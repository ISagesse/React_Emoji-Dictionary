import React from "react";
import Entry from "./Entry";
import Pedia from "../emojipedia";

function createDictionary(emojiTerm) {
  return (
    <Entry
      Key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Pedia.map(createDictionary)}</dl>
    </div>
  );
}

export default App;
