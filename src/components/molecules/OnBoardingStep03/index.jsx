import { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styles from './index.module.css';
import ProgressBar from '../../atoms/ProgressBar';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import OnboardingLayout from '../../atoms/OnboardingLayout';
import Title from '../../atoms/Title';
const OnBoardingStep03 = ({ nextStep, beforeStep }) => {
  const [name, setName] = useState('');

  const handleNextStep = () => {
    nextStep(name);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);
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
          {/* 진행률 바 표시 */}
          <div className={styles.progressBar}>
            <ProgressBar progress={1} />
          </div>
          <div className={styles.text_box}>
            <Title
              type='Title02'
              className={styles.Title_02_Bold}
              style={{
                textAlign: 'center',
                lineHeight: 1.5,
                fontWeight: 'bold',
              }}
            >
              챕챕 내에서
              <br />
              사용할 이름을 작성해주세요
            </Title>
          </div>
        </div>
        <Input
          placeholder='본명이나 닉네임을 입력해주세요!'
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttonWrap}>
        <Button disabled={!name} onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </OnboardingLayout>
  );
};
export default OnBoardingStep03;
