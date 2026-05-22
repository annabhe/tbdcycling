import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import HolidayParty from "./pages/HolidayParty.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/holiday-party" element={<HolidayParty />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
