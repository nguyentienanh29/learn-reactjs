import React, { useState } from "react";

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}ß
      <button onClick={() => setCount((x) => x + 1)}>Increase</button>
      <div>Test 1234</div>
    </div>
  );
}

export default Counter;
