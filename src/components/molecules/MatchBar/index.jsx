import styles from './index.module.css';
import information_circle from '../../../assets/information-circle.png';
import Tag from '../../atoms/Tag';
import Title from '../../atoms/Title';

const MatchBar = ({ ...rest }) => {
  return (
    <div {...rest} className={styles.wrap0}>
      <div {...rest} className={styles.wrap1}>
        <div className={styles.wrap2}>
          <div className={styles.wrap2_1}>
            <p className={styles.SubTitle_02_Bold}>
              김맹구님과 챕의 성향 일치율
            </p>
            <img
              src={information_circle}
              alt='information_circle'
              height='16px'
              width='16px'
            />
          </div>
          <p className={styles.SubTitle_02_ExtraBold}>96%</p>
        </div>

        <div className={styles.wraptag}>
          <div className={styles.wrap3}>
            <Tag type={'skyblue'}>#감성셀피독서가</Tag>
            <Tag type={'yellow'}>#느긋한책방손님</Tag>
            <Tag type={'skyblue'}>#토론</Tag>
            <Tag type={'yellow'}>#리스닝요정</Tag>
            <Tag type={'gray'}>#소설</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchBar;
