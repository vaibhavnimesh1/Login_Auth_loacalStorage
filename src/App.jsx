import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected.jsx";

const App = () => {
  const user = localStorage.getItem("name");

  return (
    <div className="container d-flex justify-content-center align-content-center pt-5">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!user ? <Signup /> : <Navigate to="/home" replace />}
          />
          <Route
            path="/signin"
            element={!user ? <Signin /> : <Navigate to="/home" replace />}
          />

          <Route element={<Protected />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
