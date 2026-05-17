import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  useEffect(() => {
  fetch("/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data));
  }, []);
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
