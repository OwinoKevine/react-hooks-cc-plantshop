import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import NewPlantForm from "./components/NewPlantForm";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((addedPlant) => setPlants([...plants, addedPlant]));
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      {/* ✅ Search Input */}
      <input
        type="text"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ Add Plant Form */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* ✅ Filtered List */}
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default App;



