import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import Title from '../../atoms/Title';
import Favorite_selection_button from '../../atoms/Favorite_selection_button';
import like336 from '../../../assets/like336.svg';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';
import OnboardingLayout from '../../atoms/OnboardingLayout';

const OnBoardingStep06 = ({ nextStep, beforeStep }) => {
  const handleNextStep = (choice) => {
    nextStep(choice);
  };

  return (
    <OnboardingLayout>
      <div className={styles.favoritetopnavbar}>
        <FavoriteTopNavbar onClick={beforeStep}>
          나의 독서 성향은?
        </FavoriteTopNavbar>
      </div>

      <div className={styles.contents}>
        <div className={styles.content}>
          {/* 프로그래스 바 추가 */}
          {/* 진행률 바 표시 */}
          <div className={styles.progressBar}>
            <ProgressBar progress={4} />
          </div>

          <div className={styles.image}>
            <img src={like336} alt='독서 스타일' className={styles.image} />
          </div>

          <div className={styles.titleContainer}>
            <Title
              type='Title02'
              className={styles.Title_02_Bold}
              style={{
                textAlign: 'center',
                lineHeight: 1.5,
                fontWeight: 'bold',
              }}
            >
              책을 고르다가 SNS에서 <br /> "요즘 화제인 책"이라는 글을 봤다!
            </Title>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <Favorite_selection_button
            onClick={() => handleNextStep('감성적인 문장 및 리뷰를 찾아본다.')}
          >
            감성적인 문장 및 리뷰를 찾아본다.
          </Favorite_selection_button>
          <Favorite_selection_button
            onClick={() =>
              handleNextStep('핵심 내용이 정리된 내용을 찾아본다.')
            }
          >
            핵심 내용이 정리된 내용을 찾아본다.
          </Favorite_selection_button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default OnBoardingStep06;
