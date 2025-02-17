import styles from './index.module.css'; // CSS 모듈 import
import leftarrow from "../../../assets/leftarrow.svg";

const FavoriteTopNavbar = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`${styles.navbar} ${className || ''}`}>
      <div className={styles.icon}>
        <img src={leftarrow} alt="뒤로가기" width={28} height={28} />
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default FavoriteTopNavbar;