import CheckButton from '../../components/atoms/CheckButton';
import { confirmModalState } from '../../shared/recoil/confirmModalState';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import TextField from '../../components/atoms/TextField';

const Home = () => {
  const [modalOpen, setModalOpen] = useRecoilState(confirmModalState);

  const handleModal = () => {
    setModalOpen({ isOpen: true });
  };

  const [isPress, setIsPress] = useState(false);

  const handleClick = () => {
    setIsPress(!isPress);
  };

  return (
    <div>
      <button onClick={handleModal}>모달 오픈</button>
      <CheckButton isPress={isPress} onClick={handleClick}>
        취향 선택 버튼
      </CheckButton>
      <TextField placeholder='(최소 10자 이상)' />
    </div>
  );
};

export default Home;
