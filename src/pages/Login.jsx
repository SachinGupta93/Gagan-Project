
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Details:", {
      email,
      password,
    });

    alert("Login successful!");
  };

  return (
    <div className="page">
      <div className="form-container login-container">

        <h1>Student Login</h1>

        <p className="form-subtitle">
          Login to your student account
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;
