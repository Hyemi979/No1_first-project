import useNavigationPage from '../../hooks/useNavigationPage';

const ChapDetail = () => {
  const { routePage } = useNavigationPage();

  const handlePage = () => {
    routePage('/chatRoom');
  };

  return (
    <div>
      <p>단기 챕 상세 페이지 입니다.</p>
      <button onClick={handlePage}>채팅방 가기</button>
    </div>
  );
};

export default ChapDetail;
