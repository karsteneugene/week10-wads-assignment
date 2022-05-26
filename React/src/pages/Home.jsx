import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroList from "./HeroList";


const Home = () => {
  const [heroes, setHeroes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('http://127.0.0.1:8000/heroes/')
      .then((response) => {
        setHeroes(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div>
      {heroes && <HeroList heroes={heroes} />}
    </div>
  );
}

export default Home;
