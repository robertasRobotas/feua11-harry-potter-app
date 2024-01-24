import Button from "@/components/Button/Button";
import Characters from "@/components/Characters/Characters";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  const [count, setCount] = useState(5);

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
      {/* <br />
      <Button
        onButtonClick={() => {
          setCount(count + 1);
        }}
        text="Add"
        type={"success"}
        className={styles.homeButton}
      />
      <br />
      <br />
      <Button
        onButtonClick={() => {
          setCount(count - 1);
        }}
        text="Reduce"
        type={"danger"}
      />
      <br />
      <br />
      <>{count}</>
      <br />
      <br /> */}

      <Header />
      <Characters characters={characters} setCharacters={setCharacters} />
      <Footer />
    </>
  );
};

export default Home;
