import { useEffect, useRef } from "react";

import styles from "./index.module.css";

export function SwiperModal({
  title,
  description,
  opened,
  image,
}: {
  title: string;
  description: string;
  opened: boolean;
  image: {
    src: string;
    alt: string;
  };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (opened && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!opened && dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }, [opened]);

  return (
    <>
      <dialog ref={dialogRef} className={styles.modal}>
        <img
          className={styles.image}
          src={image.src}
          alt={image.alt}
          draggable="false"
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </dialog>
    </>
  );
}
