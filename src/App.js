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
import ProfilePage from "./Components/ProfilePage";

function App() {
  const urls = 
  [
    {path: '/',comp: <Home />},
    {path:'/Signup',comp:<SignUp/>},
    {path:'/Signin',comp:<SignIn/>},
    {path:'/Profile',comp:<ProfilePage/>},
    {path:"*",comp:<NotFound/>}
  ]
  return (
    <>
      <Router> 
        <Navbar />
        <Routes>
          {urls.map(x => <Route key = {x} path={x.path} element={x.comp} />)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
