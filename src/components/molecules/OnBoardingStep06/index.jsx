import { useRef } from 'react';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import ProgressBar from '../../atoms/ProgressBar';
import Favorite_selection_button from '../../atoms/Favorite_selection_button';
import Title from '../../atoms/Title';
import useNavigationPage from '../../../hooks/useNavigationPage';
import styles from './index.module.css';
import like336 from '../../../assets/like336.svg';

const OnBoardingStep06 = ({ nextStep, beforeStep }) => {
  const ref = useRef(null);

  const { routePage } = useNavigationPage();
  const totalSteps = 7;
  const currentStep = 4;
  const handleNextStep = (choice) => {
    nextStep(choice);
  };

  return (
    <div className={styles.container}>
      <FavoriteTopNavbar onClick={beforeStep}>
        나의 독서 스타일은?
      </FavoriteTopNavbar>
      <div className={styles.progressContainer}>
        <ProgressBar progress={4} />
      </div>
      <div className={styles.content_wrap}>
        <div className={styles.image}>
          <img src={like336} alt='요즘 화제인 책' />
        </div>
        <div className={styles.Title_02_Bold}>
          <Title>
            책을 고르다가 SNS에서 <br /> "요즘 화제인 책"이라는 글을 봤다!
          </Title>
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
    </div>
  );
};

export default OnBoardingStep06;
