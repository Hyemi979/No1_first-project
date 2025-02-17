import React, { useState } from 'react';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import ProgressBar from '../../atoms/ProgressBar';
import TextField from '../../atoms/TextField';
import Favorite_selection_button from '../../atoms/CheckButton';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate

const FavoritePage = () => {
  const [isPress, setIsPress] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handlePage = () => {
    // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
    navigate(-1); // -1은 이전 페이지로 돌아가기
  };

  const handleNextPage = () => {
    // 버튼 클릭 시 다음 페이지로 이동
    navigate('/nextPage'); // /nextPage는 이동할 경로
  };

  const handleClick = () => {
    setIsPress(!isPress);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* FavoriteTopNavbar 컴포넌트 */}
      <FavoriteTopNavbar onClick={handlePage}>
        나의 독서 스타일은?
      </FavoriteTopNavbar>

      {/* 프로그레스 바 */}
      <ProgressBar progress={60} />

      {/* My Taste 이미지 */}
      <img src={favoriteimage} alt="My Taste" className={styles.myTaste} onClick={handlePage} />

      {/* 텍스트 필드 */}
      <TextField placeholder="(최소 10자 이상)" />

      {/* 버튼 2개 */}
      <div className={styles.buttonsWrapper}>
        <Favorite_selection_button isPress={isPress} onClick={handleClick}>
          취향 선택 버튼
        </Favorite_selection_button>
        <Favorite_selection_button onClick={handleNextPage}>다음 페이지</Favorite_selection_button>
      </div>
    </div>
  );
};

export default FavoritePage;