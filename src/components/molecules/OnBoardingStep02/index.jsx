import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import AppLogo from '../../../assets/step_logo_01.svg';
import styles from './index.module.css';

const OnBoardingStep02 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <img src={AppLogo} />
      <Title style={{ textAlign: 'center' }}>
        1분안에
        <br />내 독서 스타일 찾는 초간단 테스트
      </Title>
      <Button onClick={() => nextStep('ok')}>다음</Button>
    </div>
  );
};

export default OnBoardingStep02;
