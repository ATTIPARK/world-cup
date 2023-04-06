import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import WorldCup from "./pages/worldcup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/worldcup" element={<WorldCup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
