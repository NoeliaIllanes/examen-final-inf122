import Image from "next/image";
import styles from "./page.module.css";
import Foto from "./components/foto";
import About from "./components/about";


export default function Home() {
  return (
    <div className={styles.main}>
      <Foto/>
    </div>
  );
}
