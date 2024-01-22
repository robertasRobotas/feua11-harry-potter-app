import Characters from "@/components/Characters/Characters";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const fetchedCharacters = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(fetchedCharacters.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Header />
      <Characters characters={characters} setCharacters={setCharacters} />
      <Footer />
    </>
  );
};

export default Home;
