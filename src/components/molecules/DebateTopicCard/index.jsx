import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import upArrow_icon from '../../../assets/image/upArrow_icon.svg';

const DebateTopicCard = ({ subtitle, title, replyCount,onHeightChange, ...rest }) => {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const cardRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (onHeightChange && cardRef.current) {
      // 높이 변화를 부모 컴포넌트에 전달
      onHeightChange(cardRef.current.offsetHeight);
    }
  }, [isCollapsed, onHeightChange])

  return (
    <div {...rest} className={styles.wrap} ref={cardRef}>
      <div className={styles.card}>
        <div className={styles.topic}>
          <div className={styles.header}>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.up} onClick={toggleCollapse}>
              <img
                src={upArrow_icon}
                alt="접기 아이콘"
                style={{
                  transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          </div>
          {!isCollapsed && (
            <>
              <p className={styles.title}>{title}</p>
              
            </>
          )}
          
        </div>
        
      </div>
      <p className={styles.reply}>응답 {replyCount}</p>
    </div>
  );
};

export default DebateTopicCard;
