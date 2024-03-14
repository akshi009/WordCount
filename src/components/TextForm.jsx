import React, { useState } from "react";

export default function TextForm() {
 
  const initialText=''
    const [text, setText] = useState(initialText);
    const UpCase=()=>{
        setText(text.toUpperCase());
    }
   
    
    const LowCase=()=>{
        setText(text.toLowerCase());
    }
    const reset=()=>{
      setText(initialText);
  }
    
  const textchange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="max-w-xl mx-auto mt-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Enter the Text</h1>
        <textarea
          className="w-full text-gray-800 bg-gray-100 h-40 px-3 py-2 text-base border rounded-lg focus:outline-none focus:border-blue-500"
          id="mytext"
          value={text}
          onChange={textchange}
          
          rows="8"
          cols={160}
          placeholder="Enter your text here..."
        > </textarea>
      </div>
<div className="flex gap-3">
      <div
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline cursor-pointer"
        onClick={UpCase}
      >
        UPPERCASE
      </div>
      <div
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline cursor-pointer"
        onClick={LowCase}
      >
        lowercase
      </div>
      <div
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline cursor-pointer"
        onClick={reset}
      >
        Reset
      </div>
      </div>
      <div className=" my-3 flex-row">
       <span className="font-semibold  text-lg"> {text.split(" ").length} </span> 
       Words and <span className="font-semibold  text-lg"> {text.length}</span> Characters{' '}
       <span className="font-semibold  text-lg"> {0.008*text.split(' ').length} </span> Minutes to read
      </div>
      {text.length>=1?
       (<>
       <div className="text-2xl font-semibold">Preview</div>
        <p>{text}</p>
        </>):null}
      
    </form>
  );
}
