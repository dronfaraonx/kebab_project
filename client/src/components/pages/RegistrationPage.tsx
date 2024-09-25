import React, {useState} from "react";


export default function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log({username});
  console.log({email});
  console.log({password})


  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      setUsername('');
      setEmail('');
      setPassword('');
    }}
    
    >
    <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className={username.length < 10 ? "form-control is-invalid" : "form-control"} id="username" placeholder="Enter username" required/>
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Username should have more than 10 symbols
      </div>
    </div>
    <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="email" placeholder="Enter email" required/>
    </div>
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="password" placeholder="Password" required/>
    </div>
    <button type="submit" className="btn btn-primary btn-block">Register</button>
</form>
  );
}