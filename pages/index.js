import Main from "./components/Main";
import styles from "../styles/Home.module.css";
import Description from "./components/Description";
import SliderProvider from "../context/SliderProvider";
import { useEffect, useState, useRef, useCallback } from "react";
import Github from "../public/assets/icon/github.svg";
import Link from "next/link";
import Loading from "./components/Loading";
import DescriptionBg from "./components/DescriptionBg";
export default function Home() {
  const ref = useRef();
  const textRef = useRef();
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    if (ref && textRef) {
      window.addEventListener("mousemove", cursor);
    }

    function cursor(e) {
      ref.current.style.left = e.pageX + "px";
      ref.current.style.top = e.pageY - scrollY + "px";
      textRef.current.style.left = e.pageX + "px";
      textRef.current.style.top = e.pageY - scrollY + "px";
    }

    return () => window.removeEventListener("mousemove", cursor);
  }, []);

  useEffect(() => {
    ref.current
      .getAnimations()
      .forEach((ani) => (ani.effect.composite = "add"));
  }, [onHover]);

  const mouseOverEvent = useCallback(() => {
    setOnHover(true);
  }, []);

  const mouseLeaveEvent = useCallback(() => {
    setOnHover(false);
  }, []);

  const memorizedDescription = useCallback(() => <Description />, []);
  const memorizedSlider = useCallback(
    () => (
      <Main mouseOverEvent={mouseOverEvent} mouseLeaveEvent={mouseLeaveEvent} />
    ),
    []
  );

  return (
    <div className={styles.home}>
      <Loading />
      <Link href={"https://github.com/n0eyes"}>
        <Github className={styles.svg} />
      </Link>
      <div
        className={`${styles.cursor} ${onHover ? styles.hover : styles.leave}`}
        ref={ref}
      />
      <div
        className={`${styles.text} ${onHover && styles["text-hover"]}`}
        ref={textRef}
      >
        VIEW
      </div>
      <DescriptionBg />
      <SliderProvider
        renderDescription={memorizedDescription}
        renderSlider={memorizedSlider}
      ></SliderProvider>
    </div>
  );
}
