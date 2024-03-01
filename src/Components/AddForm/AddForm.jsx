import React from "react";
import "./AddForm.css";
function AddForm({ data, addcoder, handleChange }) {
  const handleAdd = () => {
    return addcoder(data);
  };

  return (
    <form action="">
      <label htmlFor="coderNAme">
        Name
        <input
          type="text"
          name="name"
          id="coderNAme"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Junior">
        {"Junior "}
        <input
          type="radio"
          name="position"
          id="Junior"
          value={"Junior"}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Senior">
        {"Senior"}
        <input
          type="radio"
          name="position"
          id="Senior"
          value={"Senior"}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
}

export default AddForm;
