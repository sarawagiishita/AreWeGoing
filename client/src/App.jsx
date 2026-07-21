import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateTrip from "./pages/CreateTrip";
import JoinTrip from "./pages/JoinTrip";
import TripLobby from "./pages/TripLobby";
import Questionnaire from "./pages/Questionnaire";
import WaitingForResponses from "./pages/WaitingForResponses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/join-trip" element={<JoinTrip />} />
        <Route path="/trip-lobby/:tripCode" element={<TripLobby />} />
        <Route path="/questionnaire/:tripCode/:categoryId" element={<Questionnaire />} />
        <Route path="/waiting/:tripCode" element={<WaitingForResponses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;