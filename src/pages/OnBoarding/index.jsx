import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import OnBoardingStep00 from '../../components/molecules/OnBoardingStep00';

const OnBoarding = () => {
  const { routePage } = useNavigationPage();

  const handlePage = () => {
    routePage('/');
  };

  return (
    <div className={styles.wrap}>
      <OnBoardingStep00 handlePage={handlePage} />
    </div>
  );
};

export default OnBoarding;
