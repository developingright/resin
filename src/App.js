import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <>
      
      <Router> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
