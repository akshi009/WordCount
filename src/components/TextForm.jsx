import React, { useState } from "react";

export default function TextForm() {
  const initialText = "";
  const [text, setText] = useState(initialText);
  const [copied, setCopied] = useState(false);

  const UpCase = () => {
    setText(text.toUpperCase());
  };

  const Copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const LowCase = () => {
    setText(text.toLowerCase());
  };

  const reset = () => {
    setText(initialText);
  };

  const textchange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="max-w-xl mx-auto mt-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Enter the Text</h1>
        <textarea
          className="w-full bg-gray-100 bg-opacity-30 h-40 px-3 py-2 text-base border rounded-lg focus:outline-none focus:border-blue-500"
          id="mytext"
          value={text}
          onChange={textchange}
          rows="8"
          cols={160}
          placeholder="Enter your text here..."
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          disabled={text.length === 0}
          className="btn bg-primary w-1/5 text-white"
          onClick={UpCase}
        >
          UPPERCASE
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn bg-primary w-1/5 text-white"
          onClick={LowCase}
        >
          lowercase
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn bg-primary w-1/5 text-white"
          onClick={Copy}
        >
          {copied ? " ✔" : "Copy"}
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn bg-secondary w-1/5 text-white "
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <div className=" my-3 flex-row">
        <span className="font-semibold  text-lg">
          {" "}
          {
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
        </span>
        Words and <span className="font-semibold  text-lg"> {text.length}</span>{" "}
        Characters{" "}
        <span className="font-semibold  text-lg">
          {" "}
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
        </span>{" "}
        Minutes to read
      </div>
      {text.length >= 1 ? (
        <>
          <div className="text-2xl font-semibold">Preview</div>
          <p>{text}</p>
        </>
      ) : null}
    </form>
  );
}
