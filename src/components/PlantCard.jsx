function PlantCard({ plant, onUpdatePlant }) {
  function handleSoldOut() {
    const updatedPlant = {
      ...plant,
      inStock: false,
    };

    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>

      {plant.inStock ? (
        <button onClick={handleSoldOut}>In Stock</button>
      ) : (
        <button disabled>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;