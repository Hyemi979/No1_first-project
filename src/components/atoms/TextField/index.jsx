import styles from './index.module.css'
import Title from '../Title'
import Input from '../Input'

const TextField = ({ ...rest }) => {
    return (
        <textarea {...rest} className={styles.wrap}>

        </textarea>
    )
}

export default TextField
