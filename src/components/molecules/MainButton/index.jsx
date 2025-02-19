import styles from "./index.module.css";
import shortChapImage from "../../../assets/image/shortChap_image.svg";
import shortChapRightArrow from "../../../assets/image/shortChapRightArrow.svg";
import longChapImage from "../../../assets/image/longChap_image.svg";
import longChapRightArrow from "../../../assets/image/longChapRightArrow.svg";

const CHAP_CONFIG = {
  shortChap: {
    title: "단기챕",
    subtitle: "가볍게 한마디!",
    text: "책을 읽고 떠오른 생각,\n단기챕에서 바로 나눠요!",
    bgColor: "#FFE8AD",
    borderColor: "#FFDA79",
    contentBgColor: "#FFFBF0",
    image: shortChapImage,
    arrow: shortChapRightArrow,
  },
  longChap: {
    title: "장기챕",
    subtitle: "한 권에 한 챕터씩!",
    text: "같은 사람들과 꾸준히,\n장기챕에서 생각을 나눠요!",
    bgColor: "#C4DEFE",
    borderColor: "#91C0FD",
    contentBgColor: "#F5F9FF",
    image: longChapImage,
    arrow: longChapRightArrow,
  },
};

const MainButton = ({ type = "shortChap", ...rest }) => {
  const config = CHAP_CONFIG[type];

  return (
    <div {...rest} className={styles.wrap}>
      <div
        className={styles.container}
        style={{ background: config.bgColor, borderColor: config.borderColor }}
      >
        <div className={styles.header}>
          <p className={styles.title} style={{ color: "#333333" }}>
            {config.title}
          </p>
          <img src={config.arrow} alt="아이콘" width={24} height={24} />
        </div>
        <p className={styles.Subtitle}>{config.subtitle}</p>
        <img src={config.image} alt={`${config.title} 이미지`} className={styles.character} />
      </div>
      <div
        className={styles.Content}
        style={{ background: config.contentBgColor, borderColor: config.borderColor }}
      >
        {/* text의 줄바꿈(\n)을 <br /> 태그로 변환 */}
        <p className={styles.text}>
          {config.text.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MainButton;