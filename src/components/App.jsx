import React, { useState } from "react";

function App() {
  let [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function getName(event) {
    let { name, value } = event.target;

    setName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.fName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          onChange={getName}
          name="fName"
          placeholder="First Name"
          value={name.fName}
        />
        <input
          onChange={getName}
          name="lName"
          placeholder="Last Name"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
