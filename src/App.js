import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      
      <Router> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signup' element={<SignUp/>}/>
          <Route path="/Signin" element={<SignIn/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
