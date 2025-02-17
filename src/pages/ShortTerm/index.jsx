import useNavigationPage from '../../hooks/useNavigationPage';

const ShortTerm = () => {
  const { routePage } = useNavigationPage();

  const handlePage = () => {
    routePage('/chapDetail');
  };

  return (
    <div>
      <p>단기 챕 페이지</p>
      <button onClick={handlePage}>단기 챕 상세 보기</button>
    </div>
  );
};

export default ShortTerm;
