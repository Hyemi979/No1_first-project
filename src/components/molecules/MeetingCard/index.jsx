import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import styles from './index.module.css'
import Button from '../../atoms/Button'
import Tag from '../../atoms/Tag'
import bookIcon from '../../../assets/bookIcon.svg';
import peopleIcon from '../../../assets/peopleIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';
import IconText from '../../atoms/IconText';
import reset from '../../../assets/reset.svg';

const MeetingCard = ({
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
        <div {...rest} className={styles.wrap} >
            
            <div className={styles.topwrap}>
                
            
                <Title type='Body02'
                className={styles.Body_02_Bold}
                style={{ textAlign: 'center', lineHeight: 1.5, fontFamily:'bold' ,color: '#7A5900'}}>[세상의 마지막 기차역]</Title> 
                <Title type='Body02'
                className={styles.Body_02_Bold}
                style={{ textAlign: 'center', lineHeight: 1.5, fontFamily:'bold' ,color: '#333333'}}>만약 단 하루, 과거로 돌아갈 수 있다면<br/>
                누구를 만나고 싶나요?</Title> 
            </div>
            <div className={styles.bottomwrap}>

                <div className={styles.bookImage} >
                     
                </div>

                
                <div className={styles.info}>

                    <div className={styles.tagwrap}>
                    <Tag type = "yellow">#느긋한 책방 손님{tag} </Tag>
                    <Tag type = "yellow">#소설{tag} </Tag>
                    <Tag type = "gray">#감상{tag} </Tag>                  
                    </div>

                    <div className={styles.iconText}>
                    <IconText className={styles.icon1} icon={calendarIcon}>지금 진행 중{date}</IconText>
                    <IconText className={styles.icon1} icon={peopleIcon}>21명 참여 중</IconText>
                    </div>

                    <div className={styles.matchRate}>
          <Title 
          type='Caption01'
          className={styles.Caption_01_Regular}
          style={{  lineHeight: 1.5, fontFamily:'Regular' ,color: '#666666'}}
          >성향 일치율</Title>

        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${matchRate}%` }} 
            />
          </div>
          <Title 
            type='Caption02' 
            className={styles.Caption_02_Regular}
            >
              {matchRate}%
            </Title>
          </div>
          
        </div>
                   
                </div>

                <div className={styles.buttonContainer}>
            <div>실시간</div>
                   
            </div>

            <div className={styles.buttonContainer2}>
             <img src={reset}  alt="reset"></img>
                   
            </div>

            </div>
        </div>
    )
}

export default MeetingCard


