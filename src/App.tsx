import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Recent from "./sections/Recent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Recent />
            </>
          }
        />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
