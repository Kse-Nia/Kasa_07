import React, { useState, useEffect } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => {
        if (!res) {
          console.log("Impossible de récupérer data");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        //console.log(data);
      })
      .catch((err) => {
        console.log("Une erreur est survenue");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container"></div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="container">
          {data.map((house) => (
            <Card key={house.id} {...house} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
