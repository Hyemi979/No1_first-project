import styles from './index.module.css'


const Chips = ({ isPress, isHover, children, ...rest }) => {
    if (isPress) {
        return (
            <button{...rest} className={styles.pressed}>
                {children}
            </button>
        );
    }

    else {
        return (
            <button{...rest} className={styles.wrap}>
                    {children}
                </button>
        );
    }
   
}

export default Chips
