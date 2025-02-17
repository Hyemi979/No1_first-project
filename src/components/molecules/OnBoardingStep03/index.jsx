import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import styles from './index.module.css';
import ProgressBar from '../../atoms/ProgressBar';
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
  const [progress, setProgress] = useState(1);
  const increaseProgress = () => {
      if (progress < 7) {
        setProgress(progress + 1);
      }
    }
    const Input = ({ inputRef, ...rest }) => {
      return <input ref={inputRef} {...rest} className={styles.wrap2}></input>;
    };
  return (
<div className={styles.wrap}>
<div className={styles.align_progress}>
<ProgressBar progress={progress} />
</div>
        <div className={styles.text_box}>
        챕챕 내에서
      <br />
        사용할 이름을 작성해주세요
        </div>
      <Input
        inputRef={ref}
        placeholder='본명이나 닉네임을 입력해주세요!'
        onChange={handleChange}
      />
    <div className={styles.wrapper}>
    <Button disabled={isAccept} onClick={handleNextStep}>
        다음
      </Button>
    </div>
    </div>
  );
};
export default OnBoardingStep02;
