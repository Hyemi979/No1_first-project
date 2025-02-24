

import Chatting from '../../components/molecules/Chatting';
import profile_image01 from '/src/assets/image/profile_image01.svg';
import profile_image02 from '/src/assets/image/profile_image02.svg';
import profile_image03 from '/src/assets/image/profile_image03.svg';
import profile_image04 from '/src/assets/image/profile_image04.svg';
import profile_image05 from '/src/assets/image/profile_image05.svg';
import profile_image06 from '/src/assets/image/profile_image06.svg';
import seed_badge from '/src/assets/image/seed_badge.svg';
import tree_badgeY from '/src/assets/image/tree_badgeY.svg';
import tree_badgeB from '/src/assets/image/tree_badgeB.svg';
import DebateTopicCard from '../../components/molecules/DebateTopicCard';
import TopNavBar from '../../components/atoms/TopNavbar';
import styles from './index.module.css';
import React, { useRef, useEffect, useState } from 'react';







const datas = [
  {
    profileImg: profile_image01,
    name: '김영윤T',
    sex: '남자',
    contents: '나도 어릴 때 이런 말을 들었다면 더 용기 냈을 것 같아!',
    emojis: [
      { emoji: '👍', count: 21 },
      { emoji: '✨', count: 16 },
    ],
  },
  {
    profileImg: profile_image02,
    name: '김혜미',
    sex: '여자',
    contents: '가족들과 따뜻한 밥 한 끼를 먹으며, 그동안 못했던 이야기를 나누고 싶어요.',
    emojis: [
      { emoji: '😭', count: 20 },
      { emoji: '🍚', count: 26 },
      { emoji: '💗', count: 14 },
    ],
  },
  {
    profileImg: profile_image03,
    name: '김재경',
    sex: '남자',
    contents: '예전에 갑자기 멀어진 친구와 다시 좋은 추억을 만들고 싶어요.',
    emojis: [
      { emoji: '🥺', count: 16 },
      { emoji: '💖', count: 22 },
    ],
  },
  {
    profileImg: profile_image04,
    name: '이주영',
    sex: '여자',
    contents: '인생의 중요한 가르침을 주셨던 선생님께 감사 인사를 전하고 싶어요.',
    emojis: [
      { emoji: '💛', count: 26 },
      { emoji: '😊', count: 14 },
    ],
  },
  {
    profileImg: profile_image05,
    name: '김예림',
    sex: '여자',
    contents: '너무 빨리 떠나보낸 반려동물을 다시 만나서 더 많은 사랑을 주고 싶어요.',
    emojis: [
      { emoji: '😭', count: 26 },
      { emoji: '💙', count: 22 },
    ],
  },
  {
    profileImg: profile_image06,
    name: '서희령',
    sex: '여자',
    contents: '저는 가장 행복했던 할머니께서 살아계실 때로 돌아가보고 싶어요.',
    emojis: [
      { emoji: '👵', count: 28 },
      { emoji: '😭', count: 24 },
    ],
  },
  {
    profileImg: profile_image01,
    name: '김맹구',
    sex: '남자',
    contents: '아리스토텔레스 선생님을 만나서 인생을 후회 없이 보내는 방법을 배우고 싶어요.',
    emojis: [
      { emoji: '👍', count: 26 },
      { emoji: '📜', count: 15 },
    ],
  },
  {
    profileImg: profile_image02,
    name: '이유리',
    sex: '여자',
    contents: '2년전에 교통사고로 세상을 떠난 친구가 보고 싶어요.',
    emojis: [
      { emoji: '😭', count: 20 },
      { emoji: '🎗', count: 12 },
    ],
  },
  {
    profileImg: profile_image03,
    name: '김철수',
    sex: '남자',
    contents: '여행을 하면서 만났던 사람과 잘해보고 싶어요.',
    emojis: [
      { emoji: '✈', count: 14 },
      { emoji: '💗', count: 20 },
    ],
  },
  {
    profileImg: profile_image04,
    name: '차은주',
    sex: '여자',
    contents: '바다에 놀러 갔을때 봤던 돌고래를 다시 보고 싶어요.',
    emojis: [
      { emoji: '🐬', count: 28 },
      { emoji: '🌊', count: 26 },
    ],
  },
  {
    profileImg: profile_image05,
    name: '신짱구',
    sex: '남자',
    contents: '흰둥이와 다시 산책하고 싶어요.',
    
    emojis: [
      { emoji: '😭', count: 26 },
      { emoji: '🐕', count: 22 },
    ],
    
  },
  {
    profileImg: profile_image06,
    name: '나미리',
    sex: '여자',
    isMe :true,
    contents: '1등 당첨 로또 번호를 외워서 내 집을 마련하고 싶어요.',
    emojis: [
      { emoji: '💵', count: 28 },
      { emoji: '🏠', count: 24 },
    ],
  },
];

const ChatRoom = () => {

  const topNavBarRef = useRef(null);
  const debateTopicCardRef = useRef(null);
  const [paddingTop, setPaddingTop] = useState(0);

  const handleHeightChange = (height) => {
    if (topNavBarRef.current && debateTopicCardRef.current) {
      const topNavBarHeight = topNavBarRef.current.offsetHeight;
      setPaddingTop(topNavBarHeight + height + 20); // DebateTopicCard 높이 반영
    }
  };

  useEffect(() => {
    if (topNavBarRef.current && debateTopicCardRef.current) {
      const topNavBarHeight = topNavBarRef.current.offsetHeight;
      const debateTopicCardHeight = debateTopicCardRef.current.offsetHeight;
      setPaddingTop(topNavBarHeight + debateTopicCardHeight + 20);
    }
  }, []);

  return (
    <div>
    {/* 상단 고정 섹션 */}
    <div className={styles.topsection}>
      <TopNavBar ref={topNavBarRef} navtitle="단기챕 채팅방" bell={true} settings={true} />
      <DebateTopicCard
      ref={debateTopicCardRef}
        subtitle="[세상의 마지막 기차역] 토론 주제"
        title="만약 단 하루, 과거로 돌아갈 수 있다면 누구를 만나고 싶나요?"
        replyCount="32"
        onHeightChange={handleHeightChange}
      />
    </div>


      {/* 채팅 내용 섹션 */}
      <div className={styles.container} >
        {datas.map((data, index) => (
          <Chatting
            key={index}
            profile_image={data.profileImg}
            name={data.name}
            sex={data.sex}
            content={data.contents}
            reactions={data.emojis}
            comments={0} // 임시 값
            isMe={Boolean(data.isMe)}
            badge={seed_badge} // 임시 값
          />
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
