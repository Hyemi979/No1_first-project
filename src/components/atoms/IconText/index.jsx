import { Children } from 'react';
import styles from './index.module.css';

const IconText = ({ icon: Icon, children, ...rest }) => {
    console.log(Icon);
    return (
        <div {...rest} className={styles.wrap}>
            {Icon && <Icon />}
            <p {...rest} className={styles.space}>
                {children}
            </p>
        </div>
    );
};

export default IconText;