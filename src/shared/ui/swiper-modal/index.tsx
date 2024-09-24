import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export function SwiperModal({
  title,
  description,
  opened,
  image,
  onComplete,
  perviousSlide,
  nextSlide,
}: {
  title: string;
  description: string;
  opened: boolean;
  image: { src: string; alt: string };
  onComplete: () => void;
  nextSlide: () => void;
  perviousSlide: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;
    if (opened) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 1000) {
            clearInterval(interval!);
            onComplete();
            return 1000;
          }
          return prev + 3;
        });
      }, 20);
    }

    return () => clearInterval(interval!);
  }, [opened, onComplete]);

  useEffect(() => {
    if (opened && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!opened && dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }, [opened]);

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <img
        className={styles.image}
        src={image.src}
        alt={image.alt}
        draggable="false"
      />
      <button className={styles.buttonLeft} onClick={perviousSlide} />
      <progress className={styles.progress} value={progress} max={1000} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <button className={styles.buttonRight} onClick={nextSlide} />
    </dialog>
  );
}
