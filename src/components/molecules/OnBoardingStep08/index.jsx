import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import Title from '../../atoms/Title';
import Favorite_selection_button from '../../atoms/Favorite_selection_button';
import favorite_image09 from '../../../assets/image/favorite_image09.svg';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';
import OnboardingLayout from '../../atoms/OnboardingLayout';

const OnBoardingStep08 = ({ nextStep, beforeStep }) => {
  const handleNextStep = (choice) => {
    nextStep(choice);
  };

  return (
    <OnboardingLayout>
    <div className={styles.favoritetopnavbar}>
      <FavoriteTopNavbar onClick={beforeStep}>
          나의 독서 스타일은?
        </FavoriteTopNavbar>
        </div>

        <div className={styles.contents}>
                <div className={styles.content}>

     {/* 프로그래스 바 추가 */}
       {/* 진행률 바 표시 */}
       <div className={styles.progressBar}>
          <ProgressBar progress={6} />
        </div>


      <div className={styles.image}>
        <img
          src={favorite_image09}
          alt='독서 스타일'
          className={styles.image}
        />
      </div>

      <div className={styles.titleContainer}>
        <Title
          type='Title02'
          className={styles.Title_02_Bold}
          style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
        >
          새로운 독서 핫플레이스로 <br /> 모임이 결정되었다.
        </Title>
      </div>
      </div>
      <div className={styles.buttonGroup}>
        <Favorite_selection_button
          onClick={() => handleNextStep('책에 몰입 할 수 있는 곳')}
        >
          책에 몰입 할 수 있는 곳
        </Favorite_selection_button>
        <Favorite_selection_button
          onClick={() => handleNextStep('감성있고, 커피가 맛있는 곳')}
        >
          감성있고, 커피가 맛있는 곳
        </Favorite_selection_button>
      </div>
    </div>
    </OnboardingLayout>
  );
};

export default OnBoardingStep08;
