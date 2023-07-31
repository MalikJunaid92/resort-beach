import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/rooms/" element={<Rooms/>} />
        <Route path="/rooms/:slug" element={<SingleRoom/>} />
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;