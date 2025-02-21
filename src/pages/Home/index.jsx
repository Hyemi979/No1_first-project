import TextField from '../../components/atoms/TextField';
import myTaste from '../../assets/image/main_mytaste.svg';
import useNavigationPage from '../../hooks/useNavigationPage';
import useCallModal from '../../hooks/useCallModal';
import styles from './index.module.css';

const Home = () => {
  const { routePage } = useNavigationPage();
  const { callModal } = useCallModal();

  const handlePage = () => {
    routePage('/preference');
  };

  return (
    <div className={styles.wrap}>
      <img src={myTaste} onClick={handlePage} className={styles.my_taste} />
      <button onClick={() => routePage('/shortTerm')}>단기 챕</button>
      <button onClick={callModal}>모달 오픈</button>
    </div>
  );
};

export default Home;
