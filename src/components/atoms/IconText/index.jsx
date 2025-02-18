import styles from './index.module.css';

const IconText = ({ icon, children, ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            {icon && <img src={icon} />}
            <p {...rest} className={styles.space}>
                {children}
            </p>
        </div>
    );
};

export default IconText;