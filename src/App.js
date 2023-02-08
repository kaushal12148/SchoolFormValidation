import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select any");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const validate = () => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      phoneNumber === "" ||
      password === ""
    ) {
      setEmptyError("All fields are mandatory");
      setUsername("");
      return false;
    }
    if (!name.match(/^[A-Za-z0-9- ]+$/)) {
      setNameError("Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!email.includes("@")) {
      setEmailError("must contain @");
      setUsername("");
      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("please identify as male,female or other");
      setUsername("");
      return false;
    }
    if (!phoneNumber.match(/^[0-9]+$/)) {
      setPhoneNumberError("Phone Number Must contain only numbers");
      setUsername("");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must contain 6 digits");
      setUsername("");
      return false;
    }
    return true;
  };
  const resetErrorDefault = () => {
    setNameError("");
    setEmptyError("");
    setEmailError("");
    setGenderError("");
    setPhoneNumberError("");
    setPasswordError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrorDefault();
    const isValid = validate();
    if (isValid) {
      setName("");
      setEmail("");
      setGender("Select Any");
      setPassword("");
      setPhoneNumber("");
      resetErrorDefault();
      setUsername(name);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        {nameError}
        <br />
        Email :
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        {emailError}
        <br />
        Gender :
        <select
          name="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="Select Any" selected>
            Select Any
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <br />
        {genderError}
        <br />
        Phone Number :
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <br />
        {phoneNumberError}
        <br />
        Password :
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        {passwordError}
        <br />
        {emptyError}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>{username ? "Hello " + username : ""}</h2>
      </div>
    </div>
  );
}

export default App;
