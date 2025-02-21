import { atom } from 'recoil';
import chap_book_image00 from '../../assets/image/chap_book_image00.svg';
import chap_book_image01 from '../../assets/image/chap_book_image01.svg';
import chap_book_image02 from '../../assets/image/chap_book_image02.svg';
import chap_book_image03 from '../../assets/image/chap_book_image03.svg';
import chap_book_image04 from '../../assets/image/chap_book_image04.svg';
import chap_book_image05 from '../../assets/image/chap_book_image05.svg';

export const chapState = atom({
  key: 'chapState', // unique ID (with respect to other atoms/selectors)
  default: {
    chaps: [
      {
        title: '어린이라는 세계로',
        coverImage: chap_book_image00,
        bookName: '어떤 어른',
        genre: '에세이',
        date: '25.12.31',
        participants: 21,
        tag: ['느긋한책방손님', '에세이'],
      },
      {
        title: '우리 모두 천천히 달리는 연습을 해요',
        coverImage: chap_book_image01,
        bookName: '천 개의 파랑',
        genre: 'SF',
        date: '25.02.28',
        participants: 15,
        tag: ['하이텐션북토커', 'SF'],
      },
      {
        title: '연애세포 깨우러가요',
        coverImage: chap_book_image02,
        bookName: '로맨스 도파민',
        genre: '소설',
        date: '25.03.01',
        participants: 11,
        tag: ['리스닝요정', '소설'],
      },
      {
        title:
          '디지몬이 현실 세계에 나타난다면 반려동물처럼 여겨질까, 아니면 위험한 존재로 규제될까',
        coverImage: chap_book_image03,
        bookName: '아무튼 디지몬',
        genre: '에세이/시',
        date: '25.03.17',
        participants: 30,
        tag: ['만렙성장 독서러', '에세이/시'],
      },
      {
        title: '누군가를 만나는 것은 정해진 운명일까, 단순한 우연일까?',
        coverImage: chap_book_image04,
        bookName: '트로피컬나이트',
        genre: '소설/문학',
        date: '25.03.12',
        participants: 30,
        tag: ['하이텐션 북토커', '소설/문학'],
      },
      {
        title: '어떤 음식이든 추억 보정이 들어가면 맛있어지는 걸까?',
        coverImage: chap_book_image05,
        bookName: '토마토컵라면',
        genre: '에세이/시',
        date: '25.03.10',
        participants: 30,
        tag: ['느긋한 책방 손님', '에세이/시'],
      },
    ],
  }, // default value (aka initial value)
});
