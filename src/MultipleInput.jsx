import { useState } from "react";
import "./App.css";
const MultipleInput = () => {
  const [registration, setRegistration] = useState({
    username: "",
    age: "",
    email: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setRegistration({ ...registration, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();

    const record = { ...registration, id: new Date().getTime().toString() };

    setRecords([...records, record]);
    console.log(records);
    alert(`username:${registration.username}`);
    alert(`username:${registration.age}`);
    alert(`username:${registration.email}`);
  };

  return (
    <>
      <div className="container">
        <input
          onChange={handleInput}
          value={registration.username}
          name="username"
          placeholder="username"
        ></input>
        <input
          onChange={handleInput}
          name="age"
          value={registration.age}
          placeholder="age"
        ></input>
        <input
          onChange={handleInput}
          name="email"
          value={registration.email}
          placeholder="email"
        ></input>
        <input onChange={handleInput} value="" placeholder="password"></input>
        <input
          onChange={handleInput}
          value=""
          placeholder="confirm password"
        ></input>
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
};
export default MultipleInput;
