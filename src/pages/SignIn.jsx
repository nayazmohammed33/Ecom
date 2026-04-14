import React, { useState ,useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const [email , setEmail] =useState("");
  const [password,setPassword] =useState("")
const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBm7sa7FWN8Hir1RIN4CPQK-QTaQOh7-lM",
        {
           method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        },
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error.message);
      }
      console.log("User signed in:", data);

      authCtx.login(data.idToken, data.email || "Anonymous");
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };
  return (
    <div className="Main-Container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
