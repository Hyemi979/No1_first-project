import Title from '../../atoms/Title';
import IconText from '../../atoms/IconText';
import Tag from '../../atoms/Tag';
import styles from './index.module.css';
import bookIcon from '../../../assets/bookIcon.svg';
import peopleIcon from '../../../assets/peopleIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';
import Liveandsoon from '../../atoms/Liveandsoon';

// 북카드 컴포넌트
const BookCard = ({
  title,
  coverImage,
  bookname,
  date,
  participants,
  matchRate,
  tag,
  isLongChap,
  ...rest
}) => {

  let liveType = 'live'; // 기본값 live
  // 단기챕인 경우에만 날짜 비교 진행
  
  if (!isLongChap && date) {
    const formattedDate = date.replace(/\./g, '-');
    const eventDate = new Date(formattedDate);
    eventDate.setHours(0, 0, 0, 0); // 이벤트 날짜도 00:00:00으로 설정
    const now = new Date();
    now.setHours(0, 0, 0, 0); // 현재 시간을 00:00:00으로 설정


liveType = eventDate < now ? "live" : "coming"; // 기존 변수 업데이트
 
  }
     
  return (
    <div className={matchRate ? styles.card : styles.card_small} {...rest}>
      <div className={matchRate ? styles.cover : styles.cover_small}>
        {/* isLongChap가 true면 Liveandsoon을 렌더링하지 않음 */}
                {!isLongChap && <Liveandsoon type={liveType} />}
        <img src={coverImage} alt='책표지' className={styles.image} />
      </div>

      {/* 책 정보 */}
      <div className={styles.info}>
        <div className={styles.topblock}>
          {/* 태그 리스트 */}
          <div className={styles.tags}>
            {tag?.map((el) => (
              <Tag key={el} type={'yellow'}>
                # {el}
              </Tag>
            ))}
          </div>

          {/* 제목 */}
          <Title
            type='Body01'
            className={styles.Body_01_Bold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'bold',
              color: '#333333',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            {title}
          </Title>
        </div>

        {/* 책 정보 리스트 (아이콘 + 텍스트 조합) */}
        <div className={styles.icontext}>
          <IconText icon={bookIcon}>{bookname}</IconText>
          <IconText icon={calendarIcon}>{date}</IconText>
          <IconText
            icon={peopleIcon}
          >{`${participants}명이 의견을 남겼어요`}</IconText>
        </div>

        {/* 성향 일치율 */}
        {matchRate && (
          <div className={styles.matchRate}>
            <Title type='Caption01' className={styles.Caption_01_Regular}>
              성향 일치율
            </Title>

            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${matchRate}%` }}
                />
              </div>
              <Title type='Caption02' className={styles.Caption_02_Regular}>
                {matchRate}%
              </Title>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
