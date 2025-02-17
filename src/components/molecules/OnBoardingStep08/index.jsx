import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import Title from '../../atoms/Title';
import Favorite_selection_button from '../../atoms/Favorite_selection_button';
import favorite_image08 from '../../../assets/image/favorite_image08.svg';
import ProgressBar from '../../atoms/ProgressBar';
import useNavigationPage from '../../../hooks/useNavigationPage';
import styles from './index.module.css';

const OnBoardingStep08 = ({ nextStep }) => {
  const { routePage } = useNavigationPage();
  const totalSteps = 8; // 전체 단계 수
  const currentStep = 5; // 현재 단계

  const handleNextStep = (choice) => {
    nextStep(choice);
    routePage('/', choice);
  };

  return (
    <div className={styles.container}>
      <FavoriteTopNavbar>나의 독서 스타일은?</FavoriteTopNavbar>

      {/* 프로그래스 바 추가 */}
      <ProgressBar progress={5} />  {/* 5/7 상태 표시 */}

      <img src={favorite_image08} alt="독서 스타일" className={styles.image} />

      <Title>책을 다 읽고 난 후, 당신의 피드는?</Title>

      <div className={styles.buttonGroup}>
        <Favorite_selection_button onClick={() => handleNextStep('실용적인 정보 공유')}>실용적인 정보 공유</Favorite_selection_button>
        <Favorite_selection_button onClick={() => handleNextStep('가볍게 자신의 생각 공유')}>가볍게 자신의 생각 공유</Favorite_selection_button>
      </div>
    </div>
  );
};

export default OnBoardingStep08;