import React from "react";
import { useMemo, useState, createContext } from "react";

export const sliderInfoContext = createContext({});
export const setActiveSliderContext = createContext({});

function SliderProvider({ renderDescription, renderSlider }) {
  const portfolioInfo = useMemo(
    () => [
      {
        title: "About",
        description:
          "안녕하세요, 30기 WEB OB 정세연입니다\n지난 기수 앱잼은 저의 진로관에 영향을 끼칠 정도로 값진 경험이었습니다. 좋은 서비스를 좋은 사람들에게 둘러쌓여 만드는 경험은 더 없이 소중했습니다. 많은 것을 느꼈고 많은 부분을 보완했습니다. 더욱 발전하고 성숙해진 OB로써 PACKMAN의 일원이 되길 희망합니다.\n\n귀한 시간 내주셔서 감사합니다.",
        tags: ["WEB 짱", "INTP", "26살..", "새벽반"],
      },
      {
        title: "Teamble",
        description:
          "지난 기수 앱잼동안 진행했던 서비스, Teamble입니다. 프로젝트의 처음부터 끝까지(릴리즈 진행중...) 참여했던 첫 서비스인 만큼 정도 많고 탈도 많았던 서비스입니다. 제가 30기 SOPT를 한번 더 하게 한 가장 큰 이유입니다. 앞으로 많은 프로젝트를 진행하겠지만 첫 사랑을 잊을 수 없는 만큼 Teamble만큼은 잊을 수 없을 것 같습니다.\n\n배운 모든 것들을 PACKMAN에 풀어보겠습니다.",
        tags: ["좋은 사람", "좋은 서비스", "최고의 경험"],
      },
      {
        title: "Hacker News",
        description:
          "개인 프로젝트로 진행했던 뉴스 앱, Hacker News입니다. PACKMAN의 원활하고 완성도 높은 진행을 위해 해당 프로젝트를 PWA로 전환한 경험이 있습니다. 방문하신다면 해당 앱을 설치 및 바로가기 추가를 통해 앱처럼 사용이 가능합니다. 현재는 푸쉬알림 연동에 대해 공부하고 있고 추후 해당 기능을 추가하는 것이 목표입니다.\n\n앞광고 어필입니다 :^)",
        tags: ["PWA", "개인 프로젝트", "뉴스 앱"],
      },
      {
        title: "PACKMAN",
        description:
          "함께하고 싶은 서비스, PACKMAN입니다.\n중간 발표부터 지금까지 항상 마음속의 1순위였습니다. 제가 팩맨과 함께하게 된다면 지난 기수의 경험을 살려 서로 믿고 성장하는 일원이 될 수 있도록 노력하겠습니다. 개발 실력은 조금 부족할지라도 서비스에 대한 애정만큼은 뒤지지 않을 자신있습니다.\n\n함께하는 날을 손꼽아 기대하겠습니다.",
        tags: ["WIT", "FIT", "NEAT"],
      },
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <sliderInfoContext.Provider value={{ activeIndex, portfolioInfo }}>
      <setActiveSliderContext.Provider value={setActiveIndex}>
        {renderDescription()}
        {renderSlider()}
      </setActiveSliderContext.Provider>
    </sliderInfoContext.Provider>
  );
}

export default React.memo(SliderProvider);
