import { useState } from 'react';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Favorite_small_selection_button from '../../atoms/Favorite_small_selection_button';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';

// 온보딩 프로세스의 네 번째 스텝 컴포넌트
const OnBoardingStep04 = ({ nextStep, beforeStep }) => {
  // 사용자가 선택한 성별을 저장하는 상태
  const [selectedGender, setSelectedGender] = useState(null);

  // 성별 선택 핸들러
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  // '다음' 버튼 클릭 시 실행되는 함수
  const handleNextStep = () => {
    nextStep(selectedGender); // 선택된 성별 정보를 다음 스텝에 전달
  };

  return (
    <div className={styles.wrap}>
      {/* 최상단 네비게이션 바 */}
      <FavoriteTopNavbar
        onClick={beforeStep}
        className={styles.FavoriteTopNavbar}
      >
        타이틀
      </FavoriteTopNavbar>

      <div className={styles.contents}>
        <div className={styles.content}>
          {/* 진행률 바 표시 */}
          <ProgressBar progress={2} className={styles.progressBar} />

          {/* 제목 및 설명 */}
          <div className={styles.subtitle}>
            <Title style={{ fontSize: '20px', fontWeight: '600' }}>
              성별을 선택해주세요!
            </Title>
          </div>
        </div>

        {/* 성별 선택 버튼 목록 */}
        <div className={styles.genderGrid}>
          <Favorite_small_selection_button
            onClick={() => handleGenderSelection('male')}
            className={selectedGender === 'male' ? styles.selected : ''}
          >
            남자
          </Favorite_small_selection_button>
          <Favorite_small_selection_button
            onClick={() => handleGenderSelection('female')}
            className={selectedGender === 'female' ? styles.selected : ''}
          >
            여자
          </Favorite_small_selection_button>
        </div>
      </div>

      {/* '다음' 버튼 (선택된 성별이 없을 경우 비활성화) */}
      <Button
        className={styles.Button}
        onClick={handleNextStep}
        disabled={!selectedGender}
      >
        다음
      </Button>
    </div>
  );
};

export default OnBoardingStep04;
