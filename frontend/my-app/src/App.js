import { BrowserRouter,Routes,Route } from "react-router-dom";

import UserRegistation from "./components/UserRegistation";
import Login from "./components/login";

import Home from "./components/Home";

function App() {
  return (
   <div>
        <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <UserRegistation/>} />
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
