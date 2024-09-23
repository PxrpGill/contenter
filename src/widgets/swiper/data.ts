const baseDir = "/swiper-images"

interface ISwiperData {
    title: string;
    description: string;
    img: {
        src: string;
        alt: string;
    }
}

const swiperData: ISwiperData[] = [
  {
    title: "Конец лета",
    description: "Незабываемый вечер последнего дня лета",
    img: {
      src: `${baseDir}/first.jpg`,
      alt: "Пейзаж",
    },
  },
  {
    title: "Морская бездна",
    description: "Холодный морской бриз",
    img: {
        src: `${baseDir}/second.jpg`,
        alt: "Море"
    }
  },
  {
    title: "Тихий пруд",
    description: "Вечер в лесу у пруда",
    img: {
        src: `${baseDir}/third.jpg`,
        alt: "Пруд"
    }
  },
  {
    title: "Виды с птичьего полета",
    description: "Окунитесь в эту атмосферу с головой",
    img: {
        src: `${baseDir}/fourth.jpg`,
        alt: "Виды"
    }
  },
  {
    title: "Конец лета",
    description: "Незабываемый вечер последнего дня лета",
    img: {
      src: `${baseDir}/first.jpg`,
      alt: "Пейзаж",
    },
  },
  {
    title: "Морская бездна",
    description: "Холодный морской бриз",
    img: {
        src: `${baseDir}/second.jpg`,
        alt: "Море"
    }
  },
  {
    title: "Тихий пруд",
    description: "Вечер в лесу у пруда",
    img: {
        src: `${baseDir}/third.jpg`,
        alt: "Пруд"
    }
  },
  {
    title: "Виды с птичьего полета",
    description: "Окунитесь в эту атмосферу с головой",
    img: {
        src: `${baseDir}/fourth.jpg`,
        alt: "Виды"
    }
  },
];

export default swiperData;
