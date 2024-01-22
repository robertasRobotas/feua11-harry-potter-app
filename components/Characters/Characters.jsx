import React from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";
import { Spinner } from "../Spinner/Spinner";

const Characters = ({ characters, setCharacters }) => {
  const filterCharacters = (id) => {
    const filteredCharacters = characters.filter((character) => {
      return character.id !== id;
    });

    setCharacters(filteredCharacters);
  };

  return (
    <div className={styles.cardWrapper}>
      {characters ? (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <Card
                id={character.id}
                name={character.name}
                yearOfBirth={character.yearOfBirth}
                species={character.species}
                image={character.image}
                filterCharacters={filterCharacters}
              />
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Characters;
