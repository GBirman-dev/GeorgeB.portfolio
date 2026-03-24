import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./HomePage";
import HestivaPlatforms from "./projects/HestivaPlatforms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/hestiva-platforms" element={<HestivaPlatforms />} />
      </Routes>
    </BrowserRouter>
  );
}
