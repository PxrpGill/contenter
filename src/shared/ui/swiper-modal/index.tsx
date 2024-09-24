import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export function SwiperModal({
  title,
  description,
  opened,
  image,
  onComplete,
}: {
  title: string;
  description: string;
  opened: boolean;
  image: { src: string; alt: string };
  onComplete: () => void; // Функция для изменения индекса
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [progress, setProgress] = useState(0);

  // Таймер прогресса
  useEffect(() => {
    let interval = null;
    if (opened) {
      setProgress(0); // Сбрасываем прогресс при открытии
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 700) {
            clearInterval(interval!); // Останавливаем таймер
            onComplete(); // Вызываем onComplete для смены слайда
            return 700;
          }
          return prev + 1; // Прогрессирует каждые 10 мс
        });
      }, 10);
    }

    return () => clearInterval(interval!); // Чистим таймер при закрытии или размонтировании
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
      <progress className={styles.progress} value={progress} max={700} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </dialog>
  );
}
