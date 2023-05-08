import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { SignUpPage } from "Pages/SignUp/SignUpPage";
import { LoginPage } from "Pages/LoginPage/LoginPage";



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
  );
}

export default App;
