import styles from './index.module.css'
import PropTypes from 'prop-types';

const Liveandsoon = ({ type }) => {
  if (type !== 'live' && type !== 'coming') {
    return null; // type이 'live'나 'coming'이 아닐 경우 렌더링하지 않음
  }

  
    return (
      <div className={styles.statusContainer}>
        {type === 'live' ? (
          <div className={styles.liveContainer}>실시간</div>
        ) : (
          <div className={styles.ComingContainer}>진행 예정</div>
        )}
      </div>
    );
  };
  
  Liveandsoon.propTypes = {
    type: PropTypes.oneOf(['live', 'coming', 'hidden']).isRequired,
  };
  
  export default Liveandsoon;


