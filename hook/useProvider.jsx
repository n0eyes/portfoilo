import { useContext } from "react";
import {
  activeIndexContext,
  setActiveSliderContext,
} from "../context/SliderProvider";

function useProvider(fn) {
  const sliderInfo = useContext(activeIndexContext);
  const setActiveIndex = useContext(setActiveSliderContext);

  const context = {
    sliderInfo,
    setActiveIndex,
  };

  return fn(context);
}

export default useProvider;
