import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    try {
      localStorage.clear("");
      setResult(true);
      setTimeout(() => {
        navigate("/signin");
        window.location.reload();
      }, 2000);
      setResult(true);
    } catch (error) {
      console.log(error);
    }
  };
  // localStorage.removeItem("login");

  useEffect(() => {
    let username = localStorage.getItem("name");
    setUser(username);
  }, []);

  useEffect(() => {
    let username = localStorage.getItem("name");
    if (username) navigate("/home");
  }, []);

  return (
    <main>
      <div className="nav">
        <button className="logout" onClick={logout}>
          LogOut
        </button>
      </div>
      {result && <h1>Logout up successfully</h1>}
      <h1> login as : {user}</h1>
    </main>
  );
};

export default Home;
