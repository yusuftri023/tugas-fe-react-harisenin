import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage/Profilepage";
import Pagenotfound from "./pages/Pagenotfound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/profile/:id" element={<Profilepage />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
