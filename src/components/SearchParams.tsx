import React from "react";
import { useSearchParams } from "react-router-dom";
//yesko route chai Filter ho hai.
const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams({ age: "26", city: "Butwal" });
  };

  const age = searchParams.get("age");
  const city = searchParams.get("city");
  const text = searchParams.get("text");

  const handleChange = (e: any, age: any, city: any) => {
    setSearchParams({ text: e.target.value, age: age, city: city });
  };
  return (
    <div>
      <h1>Hi, Iam Filter Page</h1>
      <h3>Age:- {age}</h3>
      <h3>City:- {city}</h3>
      <h3>Text:- {text}</h3>
      <button onClick={handleClick}>Set Age and City in Query Params</button>
      <input
        type="text"
        onChange={(e) => handleChange(e, age, city)}
        placeholder="Type Anything"
      />
    </div>
  );
};

export default SearchParams;
