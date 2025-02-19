import { useEffect } from 'react';
import loading from '../../../assets/loading.gif';

const OnBoardingStep10 = ({ nextStep }) => {
  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 3000);
  }, []);
  return (
    <div>
      <img src={loading} alt='chaploading' height='100px' width='200px' />
    </div>
  );
};

export default OnBoardingStep10;
