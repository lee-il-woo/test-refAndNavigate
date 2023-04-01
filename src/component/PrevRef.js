import React, { useState, useRef } from 'react';
import './PrevRef.css'
function PrevRef() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function incrementPrevCount() {
    prevCount.current++
  }
  return (
    <div className='PrevRef'>
        <div>PrevRef입니다.</div>
      <p>count: {count}</p>
      <button onClick={incrementCount}>Increment</button>

      <p> prevCount: {prevCount.current}</p>
      <button onClick={incrementPrevCount}>Increment</button>
    </div>
  );
}

export default PrevRef