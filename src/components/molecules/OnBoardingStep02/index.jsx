import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import AppLogo from '../../../assets/step_logo_01.svg';
import styles from './index.module.css';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import OnboardingLayout from '../../atoms/OnboardingLayout';

const OnBoardingStep02 = ({ nextStep, beforeStep }) => {
  return (
    <OnboardingLayout>
      <div className={styles.favoritetopnavbar}>
        <FavoriteTopNavbar onClick={beforeStep}>
          나의 독서 성향은?
        </FavoriteTopNavbar>
      </div>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <img src={AppLogo} />
          <Title
            type='Title02'
            className={styles.Title_02_Bold}
            style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
          >
            1분안에
            <br />내 독서 성향 알아보기!
          </Title>
        </div>
        <div className={styles.button_container}>
          <Button onClick={() => nextStep('ok')}>독서 성향 찾기</Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default OnBoardingStep02;
