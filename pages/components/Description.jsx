import React from "react";
import useProvider from "../../hook/useProvider";
import styles from "../../styles/Description.module.css";
function Description() {
  const { activeIndex, portfolioInfo } = useProvider(
    (context) => context.sliderInfo
  );

  return (
    <div className={styles.root} key={activeIndex}>
      <div className={styles.title}>{portfolioInfo[activeIndex]?.title}</div>
      <div className={styles["tag-container"]}>
        {portfolioInfo[activeIndex]?.tags.map((tag, i) => (
          <span key={i} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div className={styles.description}>
        {portfolioInfo[activeIndex]?.description}
      </div>
    </div>
  );
}

export default React.memo(Description);
