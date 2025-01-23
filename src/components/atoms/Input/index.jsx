import styles from './index.module.css'

const Input = ({ ...rest }) => {
    return (
        <input {...rest} className={styles.wrap}>
            
        </input>
    )
}

export default Input
