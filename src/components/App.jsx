import React, { useState } from "react";

function App() {
  let [Fname, setFName] = useState("");
  let [Lname, setLName] = useState("");

  function getFName(event) {
    setFName(event.target.value);

    event.preventDefault();
  }
  function getLName(event) {
    setLName(event.target.value);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>
        Hello {Fname} {Lname}
      </h1>
      <form>
        <input
          onChange={getFName}
          name="fName"
          placeholder="First Name"
          value={Fname}
        />
        <input
          onChange={getLName}
          name="lName"
          placeholder="Last Name"
          value={Lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
