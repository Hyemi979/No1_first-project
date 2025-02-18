import Title from '../../atoms/Title';
import styles from './index.module.css';
import Button from '../../atoms/Button';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import Tag from '../../atoms/Tag';
import result_selfie from '../../../assets/image/result_selfie.svg';
import result_selfie_fantasy from '../../../assets/image/result_selfie_fantasy.svg';

const OnBoardingStep11 = ({ ...rest }) => {
  return (
    <div {...rest} className={styles.wrap}>
      <FavoriteTopNavbar
        style={{
          margin: '0',
          padding: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        나의 독서 스타일은?
      </FavoriteTopNavbar>
      <div className={styles.result_title}>
        <img src={result_selfie} alt='챕챕이 이미지' />
        <div className={styles.title_text_box}>
          <Title
            type='Body02'
            style={{
              color: '#056BF0',
              fontWeight: '700',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            나의 독서성향 유형은
          </Title>
          <Title
            style={{
              fontSize: '32px',
              fontFamily: 'extraBold',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            감성셀피독서가!
          </Title>
        </div>
      </div>
      {/* 첫번째 말풍선 상단 */}
      <div className={styles.top_con}>
        {/* 성향 태그 부분 */}
        <div className={styles.chip_container}>
          {/* 회색 태그, 노란 태그 안에 글자 테스트에 따라 바뀜 */}
          <Tag
            type='skyblue'
            style={{
              fontWeight: '700',
              fontSize: '12px',
              color: '#056BF0',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            # 감성셀피독서가
          </Tag>
          <Tag
            type='gray'
            style={{
              fontWeight: '700',
              fontSize: '12px',
              color: '#666666',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            # 책장르
          </Tag>
          <Tag
            type='yellow'
            style={{
              fontWeight: '700',
              fontSize: '12px',
              color: '#7A5900',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            # 독서모임성향
          </Tag>
        </div>
        <div className={styles.text_box1}>
          <Title
            type='SubTitle02'
            style={{
              fontFamily: 'extraBold',
              textAlign: 'center',
              color: '#000000',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            "책 한 줄이 내 하루 분위기를 좌우함…"
          </Title>
          <Title
            type='Body02'
            style={{
              fontFamily: 'Bold',
              textAlign: 'center',
              color: '#999999',
              lineHeight: '1.5',
            }}
          >
            책 속 감정에 몰입하는 타입!
            <br />
            내가 느낀 감정, 문장을 기록하면서
            <br />그 순간을 나만의 감성으로 담아내는 게 중요해요.
            <br />
            책을 읽는 것도, 내 감정을 기록하는 것도 모두 예술~
          </Title>
        </div>
        {/* /첫 번쨰 말풍선 하단/ */}
        <div className={styles.text_box2}>
          <div className={styles.metting}>
            <Title
              type='Body01'
              style={{
                color: '#056BF0',
                fontFamily: 'Bold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              당신의 독서 모임 성향은?
            </Title>
            <Title
              type='Body02'
              style={{
                color: '#000000',
                fontFamily: 'extraBold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '8px',
              }}
            >
              느긋한 책방 손님(바뀌는부분)
            </Title>
            <Title
              type='Caption01'
              style={{
                color: '#666666',
                fontFamily: 'regular',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              부담 없이 읽고 가볍게 소감을 나누는 스타일(바뀌는부분)
            </Title>
          </div>
          <div className={styles.line}></div>
          <div className={styles.genre}>
            <Title
              type='Body01'
              style={{
                color: '#056BF0',
                fontFamily: 'Bold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              당신의 선호 장르는?
            </Title>
            <Title
              type='Body02'
              style={{
                color: '#000000',
                fontFamily: 'extraBold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '8px',
              }}
            >
              판타지(바뀌는 부분)
            </Title>
            <Title
              type='Caption01'
              style={{
                color: '#666666',
                fontFamily: 'regular',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              ex. 포스 윙, 해리 포터와 마법사의 돌(바뀌는부분)
            </Title>
          </div>
        </div>
      </div>
      <div className={styles.middle_con}>
        <img src={result_selfie_fantasy} alt='환상&환장' />
      </div>
      <div className={styles.bottom_con}>
        <div className={styles.text_box3}>
          <Title
            type='Body01'
            style={{
              fontFamily: 'Bold',
              lineHeight: '1.5',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            “느긋한 책방 손님”인
            <br />
            채터님에게 딱 맞는
            <span
              style={{
                fontFamily: 'extraBold',
                fontSize: '18px',
                color: '#E0A200',
              }}
            >
              &nbsp;단기챕&nbsp;
            </span>
            추천해드려요
          </Title>
          <Title
            type='Caption01'
            style={{
              fontFamily: 'regular',
              lineHeight: '1.5',
              textAlign: 'center',
              color: '#666666',
            }}
          >
            <span style={{ fontFamily: 'Bold' }}>단기챕</span>이란?
            <br />
            특정 책이나 주제로 가볍게 이야기 나누는 모임
          </Title>
        </div>
        <div className={styles.meeting_components}>
          <div className={styles.temp}></div>
        </div>
      </div>
      <div className={styles.button_box}>
        <div className={styles.button_inner}>
          <Button>버튼</Button>
        </div>
        <Title
          type='Body02'
          style={{
            fontFamily: 'regular',
            color: '#808080',
            paddingBottom: '20px',
          }}
        >
          테스트 다시하기
        </Title>
      </div>
    </div>
  );
};

export default OnBoardingStep11;
