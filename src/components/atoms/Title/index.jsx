import styles from './index.module.css'

const Title = ({ type }) => {
    if (type === 'Title01') {
        return (
            <div className={styles.Title_01_Regular}>
            <Title>안녕하세요!</Title>
            </div>
        )
    } else if (type === 'Title02') {
        return (
            <div className={styles.Title_02_Regular}>
                <Title>안녕하세요!</Title>
            </div>
        )
    } else if (type === 'SubTitle02') {
        return (
            <div className={styles.SubTitle_02_Regular}>
                <Title>안녕하세요!</Title>
            </div>
        )
    } else if (type === 'Body01') {
        return (
            <div className={styles.Body_01_Regular}>
                <Title>안녕하세요!</Title>
            </div>
        )
    } else if (type === 'Body02') {
        return (
            <div className={styles.Body_02_Regular}>
                <Title>안녕하세요!</Title>
            </div>
        )
    } else if (type === 'Caption01') {
        return (
            <div className={styles.Caption_01_Regular}>
                <Title>안녕하세요!</Title>
            </div>
        )
    } else if (type === 'Caption02') {
        return (
            <div className={styles.Caption_02_Regular}>
                <Title>안녕하세요!</Title>
            </div>
        )
    }
}

export default Title