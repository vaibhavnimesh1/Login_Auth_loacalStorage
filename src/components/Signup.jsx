import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [useremail, setusermail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  // const validatePassword = (input) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  //   return passwordRegex.test(input);
  // };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username === "") return seterror("Username is required");
    if (useremail === "") return seterror("Email is required");
    if (password === "") return seterror("Password is required");
    if (!validateEmail(useremail)) return seterror("Invalid email format");
    // if (!validatePassword(password))
    //   return seterror(
    //     "Password regex with minimum length of 6 characters,at least one uppercase letter, one lowercase letter, one digit"
    //   );

    localStorage.setItem("name", username);
    localStorage.setItem("email", useremail);
    localStorage.setItem("password", password);

    navigate("/signin");
  };

  return (
    <>
      <div className="wrapper">
        <form action="submit">
          <h1>Register Here</h1>

          {error && <p className="err">{error}</p>}
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setusermail(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" onClick={submitHandler} className="btn">
            REGISTER
          </button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/signin"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
