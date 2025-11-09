//import React from "react";

//function NewPlantForm() {
  //return (
    //<div className="new-plant-form">
      //<h2>New Plant</h2>
      //<form>
        //<input type="text" name="name" placeholder="Plant name" />
        //<input type="text" name="image" placeholder="Image URL" />
        //<input type="number" name="price" step="0.01" placeholder="Price" />
        //<button type="submit">Add Plant</button>
      //</form>
    //</div>
  //);
//}

//export default NewPlantForm;

import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name,
      image,
      price: parseFloat(price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((plant) => setPlants((plants) => [...plants, plant]));

    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;

