import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import styles from './index.module.css';
import ProgressBar from '../../atoms/ProgressBar';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
const OnBoardingStep03 = ({ nextStep, beforeStep }) => {
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

  const Input = ({ inputRef, ...rest }) => {
    return <input ref={inputRef} {...rest} className={styles.wrap2}></input>;
  };

  return (
    /* 전체 콘텐츠감싸고 있는 div*/
    <div className={styles.wrap}>
      <div className={styles.header_wrap}>
        <FavoriteTopNavbar onClick={beforeStep}>
          <div className={styles.text_box2}>나의 독서 스타일은?</div>
        </FavoriteTopNavbar>
        <div className={styles.align_progress}>
          <ProgressBar progress={1} />
        </div>
      </div>
      <div>
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
      </div>

      <Button disabled={isAccept} onClick={handleNextStep}>
        다음
      </Button>
    </div>
  );
};
export default OnBoardingStep03;
