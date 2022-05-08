import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreatePin from "./pages/CreatePin";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/create-pin" element={<CreatePin/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
