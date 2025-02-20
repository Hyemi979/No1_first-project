import styles from './index.module.css'
import Tag from '../../atoms/Tag'
import testRightArrow from '../../../assets/image/testRightArrow.svg'
import testResult_image from '../../../assets/image/testResult_image.svg'
import ResultCardBg_image from '../../../assets/image/ResultCardBg_image.svg'

const HomeAfStep01 = ({ ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <div className={styles.container}>
                <h2>김맹구님의 취향은</h2>
                <div className={styles.tags}>
                    <Tag type={'skyblue'}>#한입독서러</Tag>
                    <Tag type={'gray'}>#SF</Tag>
                    <Tag type={'yellow'}>#하이텐션북토커</Tag>
                </div>
                <div className={styles.retest}>
                    <p className={styles.retry}>다시 한 번 취향 테스트 해볼까요?</p>
                    <img src={testRightArrow} alt="아이콘" width={18} height={18} />
                </div>
                <img className={styles.image} src={testResult_image} alt="김맹구님의 취향은" />
            </div>
        </div>
    )
}

export default HomeAfStep01
