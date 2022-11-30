import styles from "./Menu.module.scss";
import SearchEngine from "./SearchEgine/SearcEngine";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

export default function Menu() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className={styles.htmlmenu}>
        <body>
          <div className={styles.logo}>
            <Logo className={styles.logo__img} />
            <h1>React Restaurant</h1>
          </div>
          <header className={styles.header}>
            <div className={styles.header__text}>The place to be!</div>
          </header>
          <section className={styles.menu}>
            <h3 className={styles.menu__title}>Menu</h3>
            <SearchEngine search={search} setSearch={setSearch} />
            <CgSearch size={20} color="#4C4DS5E" />
          </section>
        </body>
      </nav>
    </main>
  );
}
