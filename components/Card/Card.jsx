import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";
import noImage from "../../assets/images/noImage.png";

const Card = ({ id, name, species, image, yearOfBirth }) => {
  return (
    <div className={styles.main}>
      <div>{name}</div>
      <div>{yearOfBirth}</div>
      <div>{species}</div>

      {image ? (
        <>
          <img className={styles.characterImage} src={image} />
        </>
      ) : (
        <Image alt="no image" src={noImage} className={styles.characterImage} />
      )}
    </div>
  );
};

export default Card;
