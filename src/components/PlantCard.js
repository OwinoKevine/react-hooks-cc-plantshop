import React, { useState } from "react";

function PlantCard({ plant, setPlants }) {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [price, setPrice] = useState(plant.price);
  const [editing, setEditing] = useState(false);

  // 🟢 PATCH request to update price
  function handleUpdatePrice(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(price) }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        setPlants((plants) =>
          plants.map((p) => (p.id === updatedPlant.id ? updatedPlant : p))
        );
        setEditing(false);
      });
  }

  // 🗑 DELETE request
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => {
      setPlants((plants) => plants.filter((p) => p.id !== plant.id));
    });
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>

      {editing ? (
        <form onSubmit={handleUpdatePrice}>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <p>Price: ${plant.price}</p>
      )}

      <div>
        <button onClick={() => setIsSoldOut(!isSoldOut)}>
          {isSoldOut ? "Sold Out" : "In Stock"}
        </button>
        <button onClick={() => setEditing(!editing)}>
          {editing ? "Cancel" : "Edit Price"}
        </button>
        <button onClick={handleDelete}>🗑 Delete</button>
      </div>
    </li>
  );
}

export default PlantCard;



