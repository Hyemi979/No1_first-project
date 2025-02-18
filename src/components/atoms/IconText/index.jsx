import { Children } from 'react';
import styles from './index.module.css';

const IconText = ({ icon, text, children, ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <img src={icon} alt="icon" className={styles.imgIcon} />
            <span className={styles.contentText}>{text}</span>
            {children}
        </div>
    );
};

export default IconText;