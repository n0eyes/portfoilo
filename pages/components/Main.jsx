import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Mousewheel, FreeMode, Pagination, Controller, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import styles from "../../styles/Main.module.css";
import useProvider from "../../hook/useProvider";
import SlideStopper from "./SlideStopper";

function Main({ mouseOverEvent, mouseLeaveEvent }) {
  const [dummySlideCount, setDummySlideCount] = useState(2);
  const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [openedSlide, setOpenedSlide] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const setActiveIndex = useProvider((context) => context.setActiveIndex);
  const router = useRouter();

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent));
  }, []);
  const data = [
    {
      url: "assets/img/about.jpeg",
      selector: "about",
      link: "https://github.com/n0eyes",
    },
    {
      url: "assets/img/teamble.png",
      selector: "project",
      link: "https://teamble.vercel.app/",
    },
    {
      url: "assets/img/news.png",
      selector: "project",
      link: "https://next-news-n0eyes.vercel.app/",
    },
    {
      url: "assets/img/packman.png",
      selector: "logo",
    },
  ];

  useEffect(() => {
    const countDummy = () => {
      const w = window.innerWidth;

      if (w >= 1800) {
        setDummySlideCount(3);
      } else if (w >= 1100) {
        setDummySlideCount(2);
      } else {
        setDummySlideCount(1);
      }
    };
    countDummy();
    window.addEventListener("resize", countDummy);
    return () => window.removeEventListener("resize", countDummy);
  }, []);

  const onFocusSlide = (i) => {
    setOpenedSlide(i);
  };
  const onBlurSlide = () => {
    setOpenedSlide(null);
    setIsOpened(false);
  };

  const clickToRoute = (i) => {
    if (!isOpened) {
      setIsOpened(true);
    } else {
      data[i].link && router.push(data[i].link);
    }
  };

  return (
    <div className={styles["swiper-root"]}>
      <div className={styles["swiper-container"]}>
        <Swiper
          className={styles.swiper}
          modules={[Mousewheel, FreeMode, Controller, Pagination, Parallax]}
          freeMode={{ enable: true }}
          allowTouchMove={false}
          mousewheel={true}
          parallax={true}
          preloadImages={true}
          controller={{
            control: controlledSwiper?.destroyed ? null : controlledSwiper,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            450: {
              width: 500,
              spaceBetween: 50,
            },
            750: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1025: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            1370: {
              slidesPerView: 3,
              spaceBetween: 120,
            },
            1800: {
              slidesPerView: 4,
              spaceBetween: 120,
            },
          }}
          onSlideChange={(s) => {
            s.activeIndex < data.length && setActiveIndex(s.activeIndex);
          }}
        >
          <SlideStopper
            isOpened={openedSlide !== null}
            isMobile={isMobile}
            index={openedSlide}
          />
          {data.map(({ url, selector }, i) => (
            <SwiperSlide
              className={`${styles.slide} ${
                openedSlide === i ? styles.opened : ""
              } `}
              key={i}
              onMouseOver={mouseOverEvent}
              onMouseLeave={mouseLeaveEvent}
              onClick={() => clickToRoute(i)}
              onFocus={() => onFocusSlide(i)}
              onBlur={onBlurSlide}
              tabIndex="-1"
            >
              <div
                data-swiper-parallax="20%"
                className={`${styles["slide-item"]} ${styles[`${selector}`]} `}
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            </SwiperSlide>
          ))}
          {Array(dummySlideCount)
            .fill()
            .map((_, i) => (
              <SwiperSlide key={i + data.length} />
            ))}
        </Swiper>
      </div>
      <div className={styles["swiper-container-bg"]}>
        <Swiper
          className={styles.swiper}
          modules={[Mousewheel, FreeMode, Controller, Pagination, Parallax]}
          spaceBetween={150}
          allowTouchMove={false}
          freeMode={{ enable: true }}
          parallax={true}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 150,
            },
            750: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            1350: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            2000: {
              slidesPerView: 4,
              spaceBetween: 150,
            },
          }}
          onSwiper={setControlledSwiper}
        >
          {data.map(({ url, selector }, i) => (
            <SwiperSlide className={styles.slide} key={i}>
              <div
                data-swiper-parallax="20%"
                className={`${styles["slide-item"]} ${styles[`${selector}`]}`}
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            </SwiperSlide>
          ))}

          {Array(dummySlideCount)
            .fill()
            .map((_, i) => (
              <SwiperSlide
                key={i + data.length}
                style={{ border: "1px solid white" }}
              />
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default React.memo(Main);
