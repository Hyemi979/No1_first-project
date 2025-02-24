import styles from './index.module.css'; // CSS 모듈 import
import leftarrow from '../../../assets/leftarrow.svg';
import useNavigationPage from '../../../hooks/useNavigationPage';
import share_icon from '../../../assets/image/share_icon.svg';

const FavoriteResultTopNavbar = ({ children, className, onClick, ...rest }) => {
  const { routePage } = useNavigationPage();

  // 뒤로가기 핸들러
  const handler = () => {
    if (onClick) {
      onClick();
    } else {
      routePage(-1);
    } // -1만 넣기
  };

  return (
    <div {...rest} className={`${styles.navbar} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img
            src={leftarrow}
            alt='뒤로가기'
            width={28}
            height={28}
            onClick={handler}
          />
        </div>
        <div className={styles.text}>{children}</div>
        <img src={share_icon} alt='공유' width={22} height={22} />
      </div>
    </div>
  );
};

export default FavoriteResultTopNavbar;
