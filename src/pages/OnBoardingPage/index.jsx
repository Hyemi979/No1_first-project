import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import OnBoardingStep00 from '../../components/molecules/OnBoardingStep00';
import { useSetRecoilState } from 'recoil';
import { myTasteState } from '../../shared/recoil/myTasteState';
import { useState } from 'react';
import OnBoardingStep01 from '../../components/molecules/OnBoardingStep01';

const OnBoarding = () => {
  const { routePage } = useNavigationPage();
  const [isLogin, setIsLogin] = useState(false);
  const setTasteState = useSetRecoilState(myTasteState);

  const handlePage = () => {
    setTasteState((prev) => {
      return { ...prev, isOnboarding: true };
    });
    routePage('/');
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
        <OnBoardingStep01 nextStep={handlePage} />
      ) : (
        <div className={styles.wrap}>
          <OnBoardingStep00 handlePage={handleLogin} />
        </div>
      )}
    </>
  );
};

export default OnBoarding;
