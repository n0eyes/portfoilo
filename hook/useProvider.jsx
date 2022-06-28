import { useContext } from "react";
import {
  sliderInfoContext,
  setActiveSliderContext,
} from "../context/SliderProvider";

function useProvider(fn) {
  const sliderInfo = useContext(sliderInfoContext);
  const setActiveIndex = useContext(setActiveSliderContext);

  const context = {
    sliderInfo,
    setActiveIndex,
  };

  return fn(context);
}

export default useProvider;
