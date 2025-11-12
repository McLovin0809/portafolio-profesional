import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/navBar";
import Home from "./pages/Home"; 

function App(){
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;