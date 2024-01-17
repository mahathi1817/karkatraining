import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setCharacterCount(newText.length);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
        rows="4"
        cols="50"
      />
      <p>Character Count: {characterCount}</p>
    </div>
  );
};

export default CharacterCounter;
