import { useRef } from 'react';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Favorite_small_selection_button from '../../atoms/Favorite_small_selection_button';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';

const OnBoardingStep04 = ({ nextStep }) => {
  const ref = useRef(null);

  const handleNextStep = () => {
    const item = ref.current.value;

    nextStep(item);
  };

  return (
    <div className={styles.wrap}>
      <ProgressBar className={styles.progressBar} />
      

      <div className={styles.buttonsWrapper}>
      <Title className={styles.Title} >성별을 선택해주세요!</Title>
      <Favorite_small_selection_button>남자</Favorite_small_selection_button>
      <Favorite_small_selection_button>여자</Favorite_small_selection_button>
      </div>

      <div>
      <Button  onClick={handleNextStep}>다음</Button>
      </div>
    </div>
  );
};

export default OnBoardingStep04;
