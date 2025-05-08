import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



import React, { useState } from "react";
import { Check } from "lucide-react"; // You can install lucide-react or use any icon

const SuperBuiltUpInput = () => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const maxVal = 99999999;
  const isInvalid = Number(value) > maxVal;
  const isValid = value && !isInvalid;

  return (
    <div className="p-4 max-w-md">
      <label className="font-medium block mb-1">
        Super Builtup area sqft <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setTouched(true)}
          className={`w-full px-4 py-2 border rounded-md outline-none transition ${
            !touched
              ? "border-gray-400"
              : isInvalid
              ? "border-red-800"
              : isValid
              ? "border-black-600"
              : "border-blue-900"
          }`}
        />
        {isValid && (
          <Check className="text-green-500 w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2" />
        )}
      </div>
      {isInvalid && (
        <p className="text-red-500 text-sm mt-1">
          Super builtup area square has a maximum value 99999999
        </p>
      )}
    </div>
  );
};

export default SuperBuiltUpInput;
