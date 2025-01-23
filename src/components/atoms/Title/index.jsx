import styles from './index.module.css'

const Title = ({ children, ...rest }) => {
    return (
        <h2 {...rest} className={styles.wrap}>
            {children}
        </h2>
    )
}

export default Title