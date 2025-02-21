import myTaste from '../../assets/image/main_mytaste.svg';
import Title from '../../components/atoms/Title';
import Text from '../../components/atoms/Text';
import HelloChater from '../../components/molecules/HelloChater';
import SearchBar from '../../components/molecules/SearchBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import Top3Card from '../../components/molecules/Top3Card';
import { useRecoilValue } from 'recoil';
import { chapState } from '../../shared/recoil/chapState';
import BookCard from '../../components/molecules/BookCard';
import MainButton from '../../components/molecules/MainButton';

const Home = () => {
  const { routePage } = useNavigationPage();
  const { chaps } = useRecoilValue(chapState);

  const handlePage = () => {
    routePage('/preference');
  };

  return (
    <div className={styles.wrap}>
      <img src={myTaste} onClick={handlePage} className={styles.my_taste} />
      <section className={styles.section_00}>
        <MainButton onClick={() => routePage('/shortTerm')} />
        <MainButton type={'longChap'} />
      </section>

      <SearchBar />
      <div className={styles.content_wrap}>
        <Title>실시간 TOP 챕</Title>
        <Text>지금 뜨고 있는 TOP 챕을 소개 할게요!</Text>
      </div>
      <div>단기챕 TOP3</div>
      <section className={styles.section_01}>
        {chaps.map((el, idx) => {
          if (idx < 3) {
            return (
              <Top3Card
                key={el.title}
                ranking={idx + 1}
                title={el.title}
                coverImage={el.coverImage}
                bookname={el.bookName}
                date={el.date}
                participants={el.participants}
                tags={el.tag}
              />
            );
          }
          return false;
        })}
      </section>
      <div>장기챕 TOP3</div>
      <section className={styles.section_01}>
        {chaps.map((el, idx) => {
          if (idx < 3) {
            return (
              <Top3Card
                key={el.title}
                ranking={idx + 1}
                title={el.title}
                coverImage={el.coverImage}
                bookname={el.bookName}
                date={el.date}
                participants={el.participants}
                tags={el.tag}
              />
            );
          }
          return false;
        })}
      </section>

      <div>
        <Title>발견</Title>
        <Text>내 성향에 맞는 모임. 직접 찾아보세요</Text>
      </div>
      <section className={styles.section_01}>
        {chaps.map((el, idx) => {
          if (idx < 3) {
            return (
              <BookCard
                key={el.title}
                ranking={idx + 1}
                title={el.title}
                coverImage={el.coverImage}
                bookname={el.bookName}
                date={el.date}
                participants={el.participants}
                tag={el.tag}
              />
            );
          }
          return false;
        })}
      </section>

      <div>
        <Title>
          각기 다른 사람들이
          <br />
          모여서 완성된 색다른 챕
        </Title>
      </div>
      <section className={styles.section_02}>
        {chaps.map((el, idx) => {
          if (idx < 3) {
            return (
              <BookCard
                key={el.title}
                ranking={idx + 1}
                title={el.title}
                coverImage={el.coverImage}
                bookname={el.bookName}
                date={el.date}
                participants={el.participants}
                tag={el.tag}
                matchRate={30}
              />
            );
          }
          return false;
        })}
      </section>
    </div>
  );
};

export default Home;
