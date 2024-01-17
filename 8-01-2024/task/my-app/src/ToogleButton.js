import React, { useState } from 'react';

const ToggleButton = () => {
  // State to track the toggle state
  const [isOn, setIsOn] = useState(false);

  // Function to handle button click and toggle the state
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'On' : 'Off'}
      </button>
      {isOn && <p>This content is displayed when the button is On.</p>}
    </div>
  );
};

export default ToggleButton;