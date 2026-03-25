import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./HomePage";
import HestivaPlatforms from "./projects/HestivaPlatforms";
import TanaruzBoats from "./projects/TanaruzBoats";
import RawIdea from "./projects/RawIdea";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/hestiva-platforms" element={<HestivaPlatforms />} />
        <Route path="/project/tanaruz-boats" element={<TanaruzBoats />} />
        <Route path="/project/rawidea" element={<RawIdea />} />
      </Routes>
    </BrowserRouter>
  );
}
