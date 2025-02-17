import styles from "./index.module.css";

const Favorite_small_selection_button = ({ isPress, children, ...rest }) => {
  if (isPress) {
    return (
      <button {...rest} className={styles.pressed}>
        {children}
      </button>
    );
  }
  return (
    <>
      <button {...rest} className={styles.wrap}>
        {children}
      </button>
    </>
  );
};

export default Favorite_small_selection_button;
