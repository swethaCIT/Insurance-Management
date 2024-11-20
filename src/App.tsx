import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

const App : React.FC = ()=>{
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}
export default App;

