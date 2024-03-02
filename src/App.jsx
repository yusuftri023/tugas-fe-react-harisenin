import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Profilepage from "./pages/Profilepage/Profilepage";
import Pagenotfound from "./pages/Pagenotfound/Pagenotfound";
import Postpage from "./pages/Postpage/Postpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/profiles/:id" element={<Profilepage />}></Route>
        <Route path="/posts/:id/comments" element={<Postpage />}></Route>
        <Route path="/*" element={<Pagenotfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
