import TextField from '../../components/atoms/TextField';
import myTaste from '../../assets/image/main_mytaste.svg';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';

const Home = () => {
  const { routePage } = useNavigationPage();

  const handlePage = () => {
    routePage('/preference');
  };

  return (
    <div className={styles.wrap}>
      <img src={myTaste} onClick={handlePage} className={styles.my_taste} />
    </div>
  );
};

export default Home;
