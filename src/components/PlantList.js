import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  return (
    <ul className="cards">
      {plants.map((plant, index) => (
  <PlantCard key={plant.id || index} plant={plant} setPlants={setPlants} />
      ))}
    </ul>
  );
}

export default PlantList;



