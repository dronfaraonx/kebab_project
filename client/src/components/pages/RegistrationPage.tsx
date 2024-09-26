import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../Context/auth'; 


export default function RegistrationPage() {
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();


  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = { username, email, password, role };

    try {
      const response = await fetch('http://localhost:8000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

       if (response.ok) {
        const data = await response.json();
        setUser(data.user); 
        navigate('/');
      } else {
        throw new Error('Registration failed');
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log({ data });
   
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-control"
          id="username"
          placeholder="Enter username"
          required
        />
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
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <label htmlFor="form-check mb-2">Role</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="role"
          onChange={(event) => setRole(event.target.value)}
          id="exampleRadios1"
          value="buyer"
          checked={role==="buyer"}
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
          onChange={(event) => setRole(event.target.value)}
          id="exampleRadios2"
          value="seller"
          checked={role==='seller'}
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















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function RegistrationPage() {
//   // const navigate = useNavigate();
//   // const [username, setUsername] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [role, setRole] = useState("");

//   // const [error, setError] = useState('');

//   // // console.log({ username });
//   // // console.log({ email });
//   // // console.log({ password });

//   // async function handleReg(event) {
//   //   event.preventDefault();
//   //   setError(''); 

//   //   try {
//   //     const requestBody = { username, email, password, role }; 

//   //   } catch (error) {
      
//   //   }
    
//   // }
//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         setUsername("");
//         setEmail("");
//         setPassword("");
//         setRole("")
//       }}
//     >
//       <div className="form-group mb-2">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//           className="form-control"
//           //   username.length < 10 ? "form-control is-invalid" : "form-control"
//           id="username"
//           placeholder="Enter username"
//           required
//         />
//         {/* <div id="validationServerUsernameFeedback" className="invalid-feedback">
//           Username should have more than 10 symbols
//         </div> */}
//       </div>
//       <div className="form-group mb-2">
//         <label htmlFor="email">Email address</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           className="form-control"
//           id="email"
//           placeholder="Enter email"
//           required
//         />
//       </div>
//       <div className="form-group mb-2">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           className="form-control"
//           // className={
//           //   password.length > 3 ? "form-control" : "form-control is-invalid"
//           // }
//           id="password"
//           placeholder="Password"
//           required
//         />
//         {/* {password.length <= 3 && (
//           <div className="invalid-feedback">
//             Password must be longer than 3 characters.
//           </div>
//         )} */}
//       </div>
//       <label htmlFor="form-check mb-2">Role</label>
//       <div className="form-check">
//         <input
//           className="form-check-input"
//           type="radio"
//           name="role"
//           id="exampleRadios1"
//           value="buyer"
//         />
//         <label className="form-check-label" htmlFor="exampleRadios1">
//           Buyer
//         </label>
//       </div>
//       <div className="form-check">
//         <input
//           className="form-check-input"
//           type="radio"
//           name="role"
//           id="exampleRadios2"
//           value="seller"
//         />
//         <label className="form-check-label" htmlFor="exampleRadios2">
//           Seller
//         </label>
//       </div>
//       <button type="submit" className="btn btn-primary btn-block mt-2">
//         Register
//       </button>
//     </form>
//   );
// }
