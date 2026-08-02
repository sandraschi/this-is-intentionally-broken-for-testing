import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useFakeStats, fetchMonsters } from "./api";
import Dashboard from "./pages/Dashboard";
import Monsters from "./pages/Monsters";
import Settings from "./pages/Settings";

// Type errors on purpose: wrong props, missing types, any everywhere
function App() {
  const stats = useFakeStats();
  const [monsters, setMonsters] = React.useState<any[]>([]);
  const unused = "dead code"; // biome: unused var

  React.useEffect(() => {
    fetchMonsters().then(setMonsters);
  }, []);

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/monsters">Monsters</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
        <main>
          <h1>Bakemono Runter</h1>
          <p>Monsters: {stats.monsters} — Power: {stats.power}</p>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monsters" element={<Monsters data={monsters} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
