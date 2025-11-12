import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Breakfast from "./pages/breakfast";
import Desserts from "./pages/desserts";
import Mains from "./pages/mains";
import Soups from "./pages/soups";
import Snacks from "./pages/snacks";
import Salads from "./pages/salads";
import Pastas from "./pages/pastas";
import { Card } from "./components/card";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/breakfast/:name" element={<Card />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/mains" element={<Mains />} />
        <Route path="/soups" element={<Soups />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/pastas" element={<Pastas />} />
      </Routes>
    </BrowserRouter>
  );
}
