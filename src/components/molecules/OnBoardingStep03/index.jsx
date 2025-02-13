import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import styles from './index.module.css';

const OnBoardingStep02 = ({ nextStep }) => {
  const [isAccept, setIsAccept] = useState(true);
  const ref = useRef(null);

  const handleNextStep = () => {
    const item = ref.current.value;

    nextStep(item);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== '' && value !== undefined) {
      setIsAccept(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <Title>
        챕챕 내에서
        <br />
        사용할 이름을 작성해주세요
      </Title>
      <Input
        inputRef={ref}
        placeholder='본명이나 닉네임을 입력해주세요!'
        onChange={handleChange}
      />
      <Button disabled={isAccept} onClick={handleNextStep}>
        다음
      </Button>
    </div>
  );
};

export default OnBoardingStep02;
