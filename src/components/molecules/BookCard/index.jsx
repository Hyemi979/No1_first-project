import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import IconText from '../../atoms/IconText';
import Tag from '../../atoms/Tag';
import styles from './index.module.css';
import bookIcon from '../../../assets/bookIcon.svg';
import peopleIcon from '../../../assets/peopleIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';

// 북카드 컴포넌트
const BookCard = ({
    title, 
    coverImage, 
    bookname, 
    date, 
    participants, 
    matchRate, 
    tag,
    booktag, 
    ...rest }) => {

  return (
    <div className={styles.card} {...rest}>
      <div className={styles.cover}>
        <img src={coverImage} alt= "책표지" className={styles.image} />
      </div>

      {/* 책 정보 */}
      <div className={styles.info}>
        {/* 태그 리스트 */}
        <div className={styles.tags}>
          <Tag type = "yellow"># {tag}</Tag>
          <Tag type = "gray"># {booktag}</Tag>
        </div>

        {/* 제목 */}
        <Title type = 'Body01'
        className={styles.Body_01_Bold}>{title} </Title>

        {/* 책 정보 리스트 (아이콘 + 텍스트 조합) */}
        <div className={styles.icontext}>
          <IconText icon={bookIcon}>{bookname}</IconText>
          <IconText icon={calendarIcon}>{date}</IconText>
          <IconText icon={peopleIcon}>{`${participants}명이 의견을 남겼어요`}</IconText>
        </div>

        {/* 성향 일치율 */}
        <div className={styles.matchRate}>
          <Text size="small">성향 일치율</Text>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${matchRate}%` }} 
            />
          </div>
          <Text size="small" align="right">{matchRate}%</Text>
        </div>
      </div>
    </div>
  )
};

    
export default BookCard;
