import { useEffect } from "react";
import { useSwiper } from "swiper/react";

function SlideStopper({ isOpened, isMobile, index }) {
  const swiper = useSwiper();

  useEffect(() => {
    if (!swiper?.destroyed)
      if (isOpened) {
        swiper.slideTo(index, 500);
        swiper.disable();
      } else {
        swiper.enable();
      }
  }, [isOpened, isMobile, swiper]);

  return null;
}

export default SlideStopper;
