import React, { useState, useRef, useEffect } from 'react';
import './DomRef.css'
import $ from 'jquery';
function DomRef() {
    const textRef = useRef();
    const inputRef = useRef();
    useEffect(()=>{
        console.log(textRef)
        console.log(textRef.current)
        onFocus()
    },[])

    const handleColorChange = ()=>{
        $(textRef.current).css('color','red')
        // textRef.current.style.color = 'red'
    }
    const onFocus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div className='DomRef'>
        <div ref={textRef}>DomRef입니다.</div>
        <button onClick={handleColorChange}>color change</button>
        <div>
        <input ref={inputRef}></input>
        <button onClick={onFocus}>focus</button>
        </div>
    </div>
  );
}

export default DomRef;