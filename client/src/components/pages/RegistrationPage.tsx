import React, { useState } from "react";

export default function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ username });
  console.log({ email });
  console.log({ password });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setUsername("");
        setEmail("");
        setPassword("");
      }}
    >
      <div className="form-group mb-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-control"
          //   username.length < 10 ? "form-control is-invalid" : "form-control"
          id="username"
          placeholder="Enter username"
          required
        />
        {/* <div id="validationServerUsernameFeedback" className="invalid-feedback">
          Username should have more than 10 symbols
        </div> */}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          id="email"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
          // className={
          //   password.length > 3 ? "form-control" : "form-control is-invalid"
          // }
          id="password"
          placeholder="Password"
          required
        />
        {/* {password.length <= 3 && (
          <div className="invalid-feedback">
            Password must be longer than 3 characters.
          </div>
        )} */}
      </div>
      <label htmlFor="form-check mb-2">Role</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="role"
          id="exampleRadios1"
          value="buyer"
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Buyer
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="role"
          id="exampleRadios2"
          value="seller"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Seller
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-2">
        Register
      </button>
    </form>
  );
}
