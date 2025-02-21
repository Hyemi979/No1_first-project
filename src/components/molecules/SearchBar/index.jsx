import { useRef } from 'react';
import styles from './index.module.css';
import useCallModal from '../../../hooks/useCallModal';

const SearchBar = () => {
  const { callModal } = useCallModal();

  return (
    /* 전체 콘텐츠감싸고 있는 div*/
    <div id='info__id' onClick={callModal}>
      <input className={styles.wrap2} placeholder='원하는 모임 키워드로 검색' />
    </div>
  );
};
export default SearchBar;
