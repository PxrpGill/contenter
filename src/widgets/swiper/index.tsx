import { SwiperElement } from "@/shared/ui/swiper-element";
import { Container } from "@/shared/ui/container";

import swiperData from "./data";
import styles from "./index.module.css";

export function Swiper() {
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
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
