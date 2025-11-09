import React, { useState, useEffect } from "react";

import PlantList from "./components/PlantList";
import NewPlantForm from "./components/NewPlantForm";
import Search from "./components/Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Plantsy 🌿</h1>
      <Search search={search} onSearchChange={setSearch} />
      <NewPlantForm setPlants={setPlants} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </div>
  );
}

export default App;

