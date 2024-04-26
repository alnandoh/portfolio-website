import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

function App() {
  return (
  <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="contact" element={<Contact/>}></Route>
    </Routes>
  </div>
  );
}

export default App
