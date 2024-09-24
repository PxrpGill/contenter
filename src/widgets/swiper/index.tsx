import { useState, useEffect, KeyboardEvent } from "react";

import { SwiperElement } from "@/shared/ui/swiper-element";
import { Container } from "@/shared/ui/container";
import { SwiperModal } from "@/shared/ui/swiper-modal";

import swiperData from "./data";
import styles from "./index.module.css";

export function Swiper() {
  const [opened, setOpened] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpened(false);
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    if (opened) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    // Удаляем обработчик при размонтировании
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [opened]);

  const handleElementClick = (index: number) => {
    setActiveIndex(index);
    setOpened(true);
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
              action={() => handleElementClick(indexData + 1)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <SwiperModal
          opened={opened}
          title={swiperData[activeIndex - 1].title}
          description={swiperData[activeIndex - 1].description}
          image={swiperData[activeIndex - 1].img}
        />
      )}
    </Container>
  );
}
