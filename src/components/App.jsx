import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleUpdatePlant(updatedPlant) {
    setPlants(
      plants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        onAddPlant={handleAddPlant}
        onUpdatePlant={handleUpdatePlant}
      />
    </div>
  );
}

export default App;