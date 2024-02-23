import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, seterror] = useState("");


  const loginHandler = (e) => {
    e.preventDefault();

    const signupPass = localStorage.getItem("password");
    const signupEmail = localStorage.getItem("email");


    if (email === "") return seterror("Email is required");
    if (pass === "") return seterror("Password is required");
    // console.log(signupEmail);
    // console.log(email);
    // console.log(signupPass);
    // console.log(pass);

    if (signupPass == pass && email == signupEmail) {
      console.log("Signed in ");
      localStorage.setItem("login", true);
      navigate("/home");
    } else {
      seterror("Email And Password Is Incorrect");
    }
  };

  return (
    <>
    
      <div className="wrapper">
        <form action="submit">
          <h1>Login</h1>
          {error && <p className="err">{error}</p>}

          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#"> Forgot Password?</a>
          </div>
          <button type="submit" onClick={loginHandler} className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/"> REGISTER</Link>
           
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
