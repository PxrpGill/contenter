import styles from "./index.module.css";

interface ISwiperElement {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  }
}

export function SwiperElement({ title, description, img }: ISwiperElement) {
  return (
    <article className={styles.slide}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <img className={styles.image} src={img.src} alt={img.alt} draggable="false"/>
    </article>
  );
}
