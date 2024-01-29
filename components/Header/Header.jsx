import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import burgerButton from "../../assets/images/burger.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Characters</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>Title</div>
        <Navbar />
        <div
          className={styles.burgerButtonWrapper}
          onClick={() => {
            setOpened(!isOpened);
          }}
        >
          <img src={burgerButton.src} />
        </div>
      </div>
      <div
        className={`${styles.mobileNav} ${isOpened && styles.mobileNavOpened}`}
      >
        <Navbar />
      </div>

      <div className={styles.wrapper}></div>
    </>
  );
};

export default Header;
