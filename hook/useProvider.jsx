import { useContext } from "react";
import {
  activeIndexContext,
  setActiveSliderContext,
} from "../context/SliderProvider";

function useProvider(fn) {
  const activeIndex = useContext(activeIndexContext);
  const setActiveIndex = useContext(setActiveSliderContext);

  const context = {
    activeIndex,
    setActiveIndex,
  };

  return fn(context);
}

export default useProvider;
