import myTaste from '../../assets/image/main_mytaste.svg';
import Title from '../../components/atoms/Title';
import Text from '../../components/atoms/Text';
import HelloChater from '../../components/molecules/HelloChater';
import SearchBar from '../../components/molecules/SearchBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import Top3Card from '../../components/molecules/Top3Card';

const chapInfo = {
  title: '만약 단 하루, 과거로 돌아갈 수 있다면 누구를 만나고 싶나요?',
  coverImage: '', // 책 이미지 스샷 찍어서 이미지 이름이랑 동일하게 첨부 ex)책 이름이 아몬드면 아몬드.svg
  bookname: '세상의 마지막 기차역',
  genre: '소설',
  date: '25.02.28',
  participants: 28,
  tag: ['느긋한 책방 손님', '소설'],
};

const Home = () => {
  const { routePage, state } = useNavigationPage();
  console.log('state', state);
  const handlePage = () => {
    routePage('/preference');
  };

  return (
    <div className={styles.wrap}>
      <img src={myTaste} onClick={handlePage} className={styles.my_taste} />
      <button onClick={() => routePage('/shortTerm')}>단기 챕</button>
      <SearchBar />
      <div className={styles.content_wrap}>
        <Title>실시간 TOP 챕</Title>
        <Text>지금 뜨고 있는 TOP 챕을 소개 할게요!</Text>
      </div>
      <Top3Card
        ranking={1}
        title='주인공의 갈등과 성장 과정'
        coverImage
        bookname='몰라'
        date={25.02}
        participants={24}
        tag={'태그'}
        booktag={'북태그'}
      />
    </div>
  );
};

export default Home;
