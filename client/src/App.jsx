import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateTrip from "./pages/CreateTrip";
import JoinTrip from "./pages/JoinTrip";
import WaitingRoom from "./pages/WaitingRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/join-trip" element={<JoinTrip />} />
        <Route path="/waiting-room/:tripCode" element={<WaitingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;