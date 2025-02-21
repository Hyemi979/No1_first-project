import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import TopNavbar from '../../components/atoms/TopNavbar';
import LiveShortChapCardL from '../../components/molecules/LiveShortChapCardL';
import MatchBar from '../../components/molecules/MatchBar';
import ChatterCarousel from '../../components/molecules/ChatterCarousel';
import RegisteredAnswerPreview from '../../components/molecules/RegisteredAnswerPreview';
import InfoCard from '../../components/molecules/InfoCard';
import MeetingCardS from '../../components/molecules/MeetingCardS';
import liveshortchapcard_l_default from '../../assets/image/liveshortchapcard_l_default.svg';
import Title from '../../components/atoms/Title';
import right_arrow_mini from '../../assets/right_arrow_mini.svg';
import Button from '../../components/atoms/Button';

const ChapDetail = () => {
  const { routePage } = useNavigationPage();

  const handlePage = () => {
    routePage('/chatRoom');
  };

  return (
    <div className={styles.wrap}>
      <TopNavbar navtitle='챕페이지' bell={true} dots={true} />
      <LiveShortChapCardL />
      <MatchBar />
      <ChatterCarousel />
      <RegisteredAnswerPreview />
      <InfoCard
        bookname='소설'
        bookname2='추리, 판타지'
        date='1일 진행'
        date2='지금 진행 중'
        participants='21/30명'
        participants2='자유참여'
        uploadtext='답변 등록 마감'
      />
      <div className={styles.same_book_group}>
        <div className={styles.title_box}>
          <Title
            type='Body01'
            style={{ fontFamily: 'bold', lineHeight: '1.5' }}
          >
            지금 [세상의 마지막 기차역]
            <br />
            으로 진행 중인 단기챕
          </Title>
          <div className={styles.all_list}>
            <Title type='Caption01' style={{ color: '#666666' }}>
              전체보기
            </Title>
            <div className={styles.arrow_box}>
              <img src={right_arrow_mini} alt='>' />
            </div>
          </div>
        </div>

        <div className={styles.list_box}>
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='느긋한책방손님'
            booktag='소설/문학'
          />
          <MeetingCardS
            title='마지막 기차역에서 단 한 사람만 만날 수 있다면, 누구를 선택할까요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='하이텐션북토커'
            booktag='소설/문학'
          />
          <MeetingCardS
            title='영원한 작별이 아닌, 다시 만날 수 있는 이별이 있다면 어떻게 받아들일까요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='리스닝요정'
            booktag='소설/문학'
          />
        </div>
      </div>
      <div className={styles.same_genre_group}>
        <div className={styles.title_box}>
          <Title
            type='Body01'
            style={{ fontFamily: 'bold', lineHeight: '1.5' }}
          >
            비슷한 '소설' 단기챕 추천
          </Title>
          <div className={styles.all_list}>
            <Title type='Caption01' style={{ color: '#666666' }}>
              전체보기
            </Title>
            <div className={styles.arrow_box}>
              <img src={right_arrow_mini} alt='>' />
            </div>
          </div>
        </div>

        <div className={styles.list_box}>
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='만렙성장독서러'
            booktag='소설/문학'
          />
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='느긋한책방손님'
            booktag='소설/문학'
          />
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='느긋한책방손님'
            booktag='소설/문학'
          />
        </div>
      </div>
      <div className={styles.same_tag_group}>
        <div className={styles.title_box}>
          <Title
            type='Body01'
            style={{ fontFamily: 'bold', lineHeight: '1.5' }}
          >
            비슷한 '성향' 단기챕 추천
          </Title>
          <div className={styles.all_list}>
            <Title type='Caption01' style={{ color: '#666666' }}>
              전체보기
            </Title>
            <div className={styles.arrow_box}>
              <img src={right_arrow_mini} alt='>' />
            </div>
          </div>
        </div>

        <div className={styles.list_box}>
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='느긋한책방손님'
            booktag='소설/문학'
          />
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='느긋한책방손님'
            booktag='소설/문학'
          />
          <MeetingCardS
            title='돌아가서 단 하나의 일을 바꿀 수 있다면, 어떤 선택을 바꾸고 싶나요?'
            coverImage={liveshortchapcard_l_default}
            date='25.02.20(목)'
            participants='8'
            tag='느긋한책방손님'
            booktag='소설/문학'
          />
        </div>
      </div>
      <div className={styles.button_container}>
        <div className={styles.button_text_box}>
          <Title
            type='Caption01'
            style={{ color: '#056BF0', fontFamily: 'bold', lineHeight: '1.5' }}
          >
            {' '}
            🔥현재 22명 참여 중! 함께 이야기해 보세요!
          </Title>
        </div>
        <Button>지금 바로 참여하기</Button>
      </div>
    </div>
  );
};

export default ChapDetail;
