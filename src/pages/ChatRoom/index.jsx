

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
import TopNavBar from '../../components/atoms/TopNavBar';
import styles from './index.module.css';
import React, { useRef, useEffect, useState } from 'react';

const datas = [
  {
    profileImg: profile_image02,
    name: '김혜미',
    sex: '여자',
    contents: '고생했던만큼 의미있던 시간들이었습니다!\n고생해준 팀원들에게 무한 감사!🙏',
    emojis: [
      { emoji: '🙏', count: 20 },
      { emoji: '😊', count: 26 },
      { emoji: '💗', count: 14 },
    ],
  },
  {
    profileImg: profile_image03,
    name: '김재경',
    sex: '남자',
    contents: '한달 동안 정말 많은걸 배워갔습니다.\n팀원분들이 정말 열심히 해주셔서 감사했습니다.\n다들 퇴실버튼누르셨나요?',
    emojis: [
      { emoji: '💲', count: 16 },
      { emoji: '💸', count: 14 },
      { emoji: '💰', count: 20 },
    ],
  },
  {
    profileImg: profile_image04,
    name: '윤주영',
    sex: '여자',
    isMe :true,
    contents: '처음 기획 단계에서 많이 힘들었지만\n그런 과정을 함께하면서 성장했고, 이후 디자인 단계에서\n어벤저스를 보여주셨던 우리 취탈원1조 여러분들!\n모두 감사했고 즐거웠습니다! 수료 하시고 나서\n다들 취뽀성공 하시고 멋진 직장인으로 만났으면 좋겠어요!',
    emojis: [
      { emoji: '💛', count: 26 },
      { emoji: '😊', count: 14 },
      { emoji: '⭐', count: 15 },
    ],
  },
  {
    profileImg: profile_image05,
    name: '김예림',
    sex: '여자',
    contents: '팀원들과 함께 고민하고 성장할 수 있었던 값진 시간이었습니다.\n우리 1조 팀원분들 정말 고생 많으셨고, 감사합니다!!\n디자인 8기 수강생 모두 끝까지 응원합니다! 화이팅!😎',
    emojis: [
      { emoji: '🐾', count: 16 },
      { emoji: '👽', count: 22 },
      { emoji: '👏', count: 12 },
    ],
  },
  {
    profileImg: profile_image06,
    name: '서희령',
    sex: '여자',
    contents: '팀원들과 함께 프로젝트에 몰입하며 협업의 진정한\n의미를 깨닫고, 디자인과 개발의 실력을 키워서 좋았습니다!\n모두 취준 탈출해서 1조 넘게 버는 부자 되세요!',
    emojis: [
      { emoji: '🤩', count: 15 },
      { emoji: '🙌', count: 24 },
      { emoji: '💵', count: 20 },
    ],
  },
  {
    profileImg: profile_image01,
    name: '김영윤T',
    sex: '남자',
    contents: '잘 될까 제가 더 걱정이 많았는데 여러분 덕분에\n잘 마무리 한 것 같습니다. 열심히 하신만큼 좋은 결실\n얻길 바라고 항상 밝게 빛나는 여러분이 되길 바래요!',
    emojis: [
      { emoji: '👍', count: 21 },
      { emoji: '😊', count: 26 },
      { emoji: '✨', count: 16 },
    ],
  },
  {
    profileImg: profile_image04,
    name: '김소윤T',
    sex: '여자',
    contents: '고생하셨습니다. 1조 발표가 기대되네요!',
    emojis: [
      { emoji: '👍', count: 28 },
      { emoji: '😊', count: 26 },
      { emoji: '💖', count: 14 },
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
        subtitle="[최종 프로젝트 소감] 토론 주제"
        title="약 한 달간, 최선을 다해 프로젝트를
        준비하신 소감은 어떠신가요?"
        replyCount="72"
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
            comments={5} // 임시 값
            isMe={Boolean(data.isMe)}
            badge={tree_badgeY} // 임시 값
          />
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
