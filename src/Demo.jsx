import React, { useState } from "react";
import { Card } from "./Card";

const Demo = (props) => {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
   
    <h1 className=" text-2xl flex justify-center">this is coming from props <span className=" text-amber-400"> {props.name} </span></h1>
      <div className="flex flex-col items-center justify-center mt-10">
       <Card name="Avir Singh" />
        <h1 className=" font-bold font-size text-4xl">
          React Counter With State {counter}
        </h1>
        <h2 className=" font-bold text-red-500">Counter Value</h2>
        <button
          className="px-2 py-2 mb-1 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          onClick={addValue}
        >
          Add Value
        </button>
      
        <button
          className="px-2 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          onClick={subValue}
        >
          Remove Value
        </button>
        <p>Footer {counter}</p>
      </div>
    </>
  );
};

export default Demo;
