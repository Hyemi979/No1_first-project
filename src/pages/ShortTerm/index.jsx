import BottomBar from '../../components/atoms/BottomBar';
import Chips from '../../components/atoms/Chips';
import IconText from '../../components/atoms/IconText';
import Tag from '../../components/atoms/Tag';
import Title from '../../components/atoms/Title';
import TopNavBar from '../../components/atoms/TopNavBar';
import BookCard from '../../components/molecules/BookCard';
import HelloChater from '../../components/molecules/HelloChater';
import LiveShortChapCardM from '../../components/molecules/LiveShortChapCardM';
import MeetingCardCarousel from '../../components/molecules/MeetingCardCarousel';
import ToastBar from '../../components/molecules/ToastBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import peopleIcon from '../../assets/peopleIcon.svg';
import chevron_down from '../../assets/chevron_down.svg';
import rightarrow from '../../assets/rightarrow.svg';
import bookcover23 from '../../assets/bookcover23.svg';
import 눈부신안부 from '../../assets/눈부신안부.svg';
import 바깥은여름 from '../../assets/바깥은여름.svg';
import 로맨스도파민 from '../../assets/로맨스도파민.svg';
const ShortTerm = () => {
  const { routePage } = useNavigationPage();

  const handlePage = () => {
    routePage('/chapDetail');
  };

  return (
    <div className={styles.wrap}>
      <TopNavBar navtitle='단기챕챕' search={true} bell={true} chat={true} />
      <div className={styles.topcontentWrap}>
        <HelloChater />
        <ToastBar />
        <MeetingCardCarousel />
      </div>

      <div className={styles.keywordcontentWrap}>
        <div className={styles.keywordTitleWrap}>
          <Title
            type='SubTitle02'
            className={styles.SubTitle_02_ExtraBold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'Extrabold',
              color: '#000000',
              alignSelf: 'flex-start',
            }}
          >
            성향에 맞는 챕을 <br></br>키워드로 찾아보세요!
          </Title>
          <div className={styles.keywordwrap}>
            <span>전체보기</span>
            <img src={rightarrow} />
          </div>
        </div>

        <div className={styles.chipswrap}>
          <Chips>#느긋한책방손님</Chips>
          <Chips>#소설/문학</Chips>
          <Chips>#판타지</Chips>
        </div>

        <div className={styles.soonBookCardWrap}>
          <BookCard
            coverImage={로맨스도파민}
            tag={['느긋한책방손님']}
            title={'사랑의 화학적 반응: 우리...'}
            bookname={'로맨스 도파민'}
            date={'25.02.13(목)∙17시 진행 예정'}
            participants={11}
            matchRate={97}
          ></BookCard>
          <BookCard
            coverImage={눈부신안부}
            tag={['느긋한책방손님']}
            title={'안부 인사는 단순한 예의...'}
            bookname={'눈부신 안부'}
            date={'25.02.10(월)∙18시 진행 '}
            participants={11}
            matchRate={88}
          ></BookCard>
          <BookCard
            coverImage={바깥은여름}
            tag={['느긋한책방손님']}
            title={'이별과 상실, 우리는 얼마...'}
            bookname={'바깥은 여름'}
            date={'25.02.13(목)∙17시 진행 예정'}
            participants={11}
            matchRate={88}
          ></BookCard>
        </div>
      </div>

      {/* title, 
    coverImage, 
    bookname, 
    date, 
    participants, 
    matchRate, 
    tag,
    booktag, */}

      <div className={styles.livecontentWrap}>
        <div className={styles.ContentTitleWrap}>
          <Title
            type='SubTitle02'
            className={styles.SubTitle_02_ExtraBold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'Extrabold',
              color: '#000000',
              alignSelf: 'flex-start',
            }}
          >
            지금 진행 중인 단기챕
          </Title>
          <div className={styles.livewrap}>
            <span>전체보기</span>
            <img src={rightarrow} />
          </div>
        </div>
        <div className={styles.LiveShortChapCardMWarp}>
          <LiveShortChapCardM></LiveShortChapCardM>
          <LiveShortChapCardM></LiveShortChapCardM>
        </div>
      </div>

      <div className={styles.sooncontentWrap}>
        <div className={styles.ContentTitleWrap}>
          <Title
            type='SubTitle02'
            className={styles.SubTitle_02_ExtraBold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'Extrabold',
              color: '#000000',
              alignSelf: 'flex-start',
            }}
          >
            잠시 후 챕이 시작됩니다!
          </Title>
          <div className={styles.soonwrap}>
            <span>전체보기</span>
            <img src={rightarrow} />
          </div>
        </div>

        <section className={styles.section_01}>
          <BookCard
            coverImage={바깥은여름}
            tag={['느긋한책방손님']}
            title={'이별과 상실, 우리는 얼마...'}
            bookname={'바깥은 여름'}
            date={'25.02.13(목)∙17시 진행 예정'}
            participants={11}
          />
        </section>
      </div>

      <div className={styles.calendercontentWrap}>
        <div className={styles.ContentTitleWrap}>
          <Title
            type='SubTitle02'
            className={styles.SubTitle_02_ExtraBold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'Extrabold',
              color: '#000000',
              alignSelf: 'flex-start',
            }}
          >
            챕 캘린더
          </Title>
          <div className={styles.Calenderdatefilter}>
            <span>2025</span>
            <img src={chevron_down} />
          </div>
        </div>

        <img src='calenderdate.svg' />
        <BookCard></BookCard>
      </div>

      <button onClick={handlePage}>단기 챕 상세 보기</button>
      <BottomBar></BottomBar>
    </div>
  );
};

export default ShortTerm;

//HelloChater
//ToastBar
//MeetingCardCarousel
//BookCard
//LiveShortChapCardM
//챕캘린더는 사진
//BookCard
//BottomBar
