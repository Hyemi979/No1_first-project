import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import AppLogo from '../../../assets/app_logo.svg';
import styles from './index.module.css';

const OnBoardingStep01 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <Title>ChapChap</Title>
      <img src={AppLogo} />
      <div className={styles.button_wrap}>
        <Button onClick={() => nextStep('ok')}>카카오로 로그인</Button>
        <Button onClick={() => nextStep('ok')}>네이버로 로그인</Button>
        <Button onClick={() => nextStep('ok')}>애플로 로그인</Button>
      </div>
    </div>
  );
};

export default OnBoardingStep01;
