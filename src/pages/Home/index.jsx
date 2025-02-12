import CheckButton from '../../components/atoms/CheckButton';
import { useState } from 'react';
import TextField from '../../components/atoms/TextField';
import useCallModal from '../../hooks/useCallModal';

const Home = () => {
  const { callModal } = useCallModal();

  const [isPress, setIsPress] = useState(false);

  const handleClick = () => {
    setIsPress(!isPress);
  };

  return (
    <div>
      <button onClick={callModal}>모달 오픈</button>
      <CheckButton isPress={isPress} onClick={handleClick}>
        취향 선택 버튼
      </CheckButton>
      <TextField placeholder='(최소 10자 이상)' />
    </div>
  );
};

export default Home;
