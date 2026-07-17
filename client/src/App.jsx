import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateTrip from "./pages/CreateTrip";
import JoinTrip from "./pages/JoinTrip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/join-trip" element={<JoinTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;