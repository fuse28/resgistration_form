import "./App.css";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    // setUsername({ ...username, [name]: value });
    // setAge({ ...age, [name]: value });
    // setEmail({ ...email, [name]: value });
  };

  const handleSubmit = (e, name, value) => {
    e.preventDefault();
    alert(`${name} ${value}`);
  };

  return (
    <div className="container">
      <input
        onChange={handleInput}
        value={username}
        name="username"
        placeholder="username"
      ></input>
      <input
        onChange={handleInput}
        name="age"
        value={age}
        placeholder="age"
      ></input>
      <input
        onChange={handleInput}
        name="email"
        value={email}
        placeholder="email"
      ></input>
      <input
        onChange={handleInput}
        value={password}
        placeholder="password"
      ></input>
      <input
        onChange={handleInput}
        value={confirmPassword}
        placeholder="confirm password"
      ></input>
      <button onClick={handleSubmit} value={""}>
        Submit
      </button>
    </div>
  );
}

export default App;
