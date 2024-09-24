import { useState, useEffect, KeyboardEvent } from "react";
import { SwiperElement } from "@/shared/ui/swiper-element";
import { Container } from "@/shared/ui/container";
import { SwiperModal } from "@/shared/ui/swiper-modal";
import swiperData from "./data";
import styles from "./index.module.css";

export function Swiper() {
  const [opened, setOpened] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Начинаем с 0

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpened(false);
      setActiveIndex(0); // Сбрасываем при закрытии
    }
  };

  useEffect(() => {
    if (opened) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [opened]);

  const handleElementClick = (index: number) => {
    setActiveIndex(index);
    setOpened(true);
  };

  const handleComplete = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= swiperData.length) {
        setOpened(false); // Закрываем модалку, если достигли конца
        return 0; // Сбрасываем на первый элемент (если нужно повторение)
      }
      return nextIndex; // Иначе переходим на следующий элемент
    });
  };

  return (
    <Container>
      <div className={styles.swiper}>
        <div className={styles.swiperContainer}>
          {swiperData.map((data, indexData) => (
            <SwiperElement
              title={data.title}
              description={data.description}
              img={data.img}
              key={indexData}
              action={() => handleElementClick(indexData)}
            />
          ))}
        </div>
      </div>

      {opened && activeIndex < swiperData.length && (
        <SwiperModal
          opened={opened}
          title={swiperData[activeIndex].title}
          description={swiperData[activeIndex].description}
          image={swiperData[activeIndex].img}
          onComplete={handleComplete} // Передаем функцию смены слайда
        />
      )}
    </Container>
  );
}
