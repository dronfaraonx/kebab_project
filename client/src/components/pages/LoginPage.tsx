import React, {useState} from "react";


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log({email});
  console.log({password})


  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      setEmail('');
      setPassword('');
    }}
    
    >
    <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="email" placeholder="Enter email" required/>
    </div>
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="password" placeholder="Password" required/>
    </div>
    <button type="submit" className="btn btn-primary btn-block">Login</button>
</form>
  );
}