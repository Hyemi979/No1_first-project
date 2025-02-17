import { useRef ,useState} from 'react';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Favorite_small_selection_button from '../../atoms/Favorite_small_selection_button';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
 
const OnBoardingStep04 = ({ nextStep }) => {
  const ref = useRef(null);
  const [selectedGender, setSelectedGender] = useState(null); // 선택된 성별 상태


  const handleGenderSelection = (gender) => {
    setSelectedGender(gender); // 성별 선택 업데이트
  };

  const handleNextStep = () => {
    const item = ref.current.value;

    nextStep(item);
  };

  return (
    <div className={styles.wrap}>
     <FavoriteTopNavbar className={styles.FavoriteTopNavbar}>타이틀</FavoriteTopNavbar>
    <div className={styles.contents}>
      
      <div className={styles.content}>
      
        <ProgressBar className={styles.progressBar} />
        <Title className={styles.title}>성별을 선택해주세요!</Title>
        </div>
        <div className={styles.buttonsWrapper}>
            <div className={styles.Favorite_small_selection_button}>
                <Favorite_small_selection_button onClick={() => handleGenderSelection('male')}>남자</Favorite_small_selection_button>
                <Favorite_small_selection_button onClick={() => handleGenderSelection('female')}>여자</Favorite_small_selection_button>
            </div>
        </div>
    </div>
    <Button className={styles.Button} onClick={() => nextStep('ok')} disabled={!selectedGender} >다음</Button>
    
</div>
  );
};

export default OnBoardingStep04;



