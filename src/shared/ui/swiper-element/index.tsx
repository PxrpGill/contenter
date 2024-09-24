import styles from "./index.module.css";

interface ISwiperElement {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  }
  action: () => void
}

export function SwiperElement({ title, description, img, action }: ISwiperElement) {
  return (
    <article className={styles.slide} onClick={action}>
      <img className={styles.image} src={img.src} alt={img.alt} draggable="false"/>
    </article>
  );
}
