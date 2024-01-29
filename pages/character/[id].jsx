import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Character = () => {
  const [character, setCharacter] = useState();
  const router = useRouter();

  const fetchCharacters = async () => {
    const character = await axios.get(
      `https://hp-api.onrender.com/api/character/${router.query.id}`
    );

    console.log(character.data[0]);
    setCharacter(character.data[0]);
  };

  useEffect(() => {
    router.query.id && fetchCharacters();
  }, [router.query.id]);

  return (
    <>
      {character && (
        <>
          <div>{character.actor}</div>
          <div>{character.dateOfBirth}</div>
          <img src={character.image} />
        </>
      )}
    </>
  );
};

export default Character;
