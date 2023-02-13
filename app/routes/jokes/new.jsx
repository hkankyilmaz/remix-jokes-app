import React from "react";

function New() {
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <label for="input" htmlFor="">
        Name
      </label>
      <input id="input" type="text" />
      <label for="content" htmlFor="">
        Content
      </label>
      <textarea name="" id="content" cols="30" rows="10"></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default New;
