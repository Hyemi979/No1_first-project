import React, { useState } from 'react';
import slide_01 from '../../../assets/image/slide_01.svg';
import slide_02 from '../../../assets/image/slide_02.svg';
import slide_03 from '../../../assets/image/slide_03.svg';
import slide_04 from '../../../assets/image/slide_04.svg';
import Button from '../../atoms/Button';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css';

const OnBoardingStep00 = ({nextStep}) => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 

  const settings = {

    beforeChange: (current, next) => setActiveIndex(next), // 슬라이드 변경 시 activeIndex 업데이트


    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode:true,
    slidesToScroll: 1,
    
    
    customPaging: (i) => (
      <div
        style={{
          slidesToShow:1,
        
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          centerMode:false,
          cursor: 'pointer',
           
          backgroundColor: i === activeIndex ? '#5FA3FC' : '#E6E6E6', // 현재 슬라이드에 따라 색상 변경
        }}
      ></div>
    ),
  };

  const slides = [ // 슬라이드에 표시할 이미지 정보 배열
    { src: slide_01, alt: "앱 이용 안내 1" },
    { src: slide_02, alt: "앱 이용 안내 2" },
    { src: slide_03, alt: "앱 이용 안내 3" },
    { src: slide_04, alt: "앱 이용 안내 4" },
  ];

  return (
    <div className={styles.wrap}> {/* 전체 화면을 감싸는 div */} 
      <div className={styles.slider_wrap}> {/* 슬라이더를 감싸는 div */}
        <Slider {...settings}> {/* react-slick 슬라이더 컴포넌트 */}
          {slides.map((slide, index) => (
            <div key={index} className={styles.img_wrap}> {/* 각 슬라이드 컨테이너 */}
              <img src={slide.src} className={styles.img} alt={slide.alt} /> {/* 슬라이드 이미지 */}
            </div>
          ))}
        </Slider>
      </div>

       <div className={styles.Buttonss}>
        <Button onClick={() => nextStep('ok')}>로그인</Button>
        <Button onClick={() => nextStep('ok')} style={{ backgroundColor: 'white', color: 'black', border: '1px solid white'}}>
          회원가입
        </Button>
        </div>


   </div>
  );
};
export default OnBoardingStep00;