import React from "react";
import Link from "next/link";
import Card from "../Card/Card";
import styles from "./styles.module.css";
import { Spinner } from "../Spinner/Spinner";

const Characters = ({ characters, setCharacters }) => {
  return (
    <div className={styles.cardWrapper}>
      {characters ? (
        characters.map((character) => {
          return (
            <Link href={`/character/${character.id}`} key={character.id}>
              <Card
                id={character.id}
                name={character.name}
                yearOfBirth={character.yearOfBirth}
                species={character.species}
                image={character.image}
              />
            </Link>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Characters;
