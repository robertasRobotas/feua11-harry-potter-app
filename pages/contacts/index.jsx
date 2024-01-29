import React, { useState } from "react";
import Header from "@/components/Header/Header";
import styles from "./styles.module.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSendMessage = () => {
    if (!name || !email || !message) {
      return;
    }

    const outgoingEmail = {
      name: name,
      email: email,
      message: message,
    };

    console.log("outgoingEmail", outgoingEmail);
  };

  return (
    <div>
      <Header />

      <div className={styles.form}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Message"
        ></textarea>
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Contacts;
