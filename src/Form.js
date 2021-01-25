import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getPoke}>
      <input type="text" placeholder="Buscá tu Pokemon" name="name" />
      <button></button>
    </form>
  );
};

export default Form;
