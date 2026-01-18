import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import GeneratedContract from "./pages/GeneratedContract";
import "./App.css";

export default function App() {
  const [blueprints, setBlueprints] = useState([]);
  const [contracts, setContracts] = useState([]);

  const nextStatus = {
    CREATED: "APPROVED",
    APPROVED: "SENT",
    SENT: "SIGNED",
    SIGNED: "LOCKED",
  };

  const updateStatus = (id, status) => {
    setContracts(contracts.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            blueprints={blueprints}
            setBlueprints={setBlueprints}
            contracts={contracts}
            setContracts={setContracts}
            nextStatus={nextStatus}
            updateStatus={updateStatus}
          />
        }
      />
      <Route
        path="/contract/:id"
        element={<GeneratedContract contracts={contracts} />}
      />
    </Routes>
  );
}
