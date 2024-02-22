import React, { useState } from 'react';

function About() {
  // Initialize count state variable with initial value 0
  const [count, setCount] = useState(0);

  // Define a function to handle button click and update count
  const changeCount = () => {
    // Increment count by 1 and update the state
    setCount(count + 1);
  };

  return (
    <div>
      {/* Render a button with current count value and attach click event handler */}
      <button onClick={changeCount}>count : {count}</button>
    </div>
  );
}

export default About;
