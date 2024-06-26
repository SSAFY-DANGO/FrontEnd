import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { foodOldItemsState } from '../recoil/atoms/userState';
import 아보카도 from '../assets/imgs/groceries/아보카도.png';
import 감자 from '../assets/imgs/groceries/감자.png';
import 고추 from '../assets/imgs/groceries/고추.png';
import 귤 from '../assets/imgs/groceries/귤.png';
import 당근 from '../assets/imgs/groceries/당근.png';
import 대파 from '../assets/imgs/groceries/대파.png';
import 돼지고기 from '../assets/imgs/groceries/돼지고기.png';
import 딸기 from '../assets/imgs/groceries/딸기.png';
import 마늘 from '../assets/imgs/groceries/마늘.png';
import 무 from '../assets/imgs/groceries/무.png';
import 방울토마토 from '../assets/imgs/groceries/방울토마토.png';
import 배 from '../assets/imgs/groceries/배.png';
import 배추 from '../assets/imgs/groceries/배추.png';
import 버섯 from '../assets/imgs/groceries/버섯.png';
import 복숭아 from '../assets/imgs/groceries/복숭아.png';
import 사과 from '../assets/imgs/groceries/사과.png';
import 슬라이스치즈 from '../assets/imgs/groceries/슬라이스 치즈.png';
import 애호박 from '../assets/imgs/groceries/애호박.png';
import 양배추 from '../assets/imgs/groceries/양배추.png';
import 양파 from '../assets/imgs/groceries/양파.png';
import 토마토 from '../assets/imgs/groceries/토마토.png';
import 포도 from '../assets/imgs/groceries/포도.png';
import 파프리카 from '../assets/imgs/groceries/파프리카.png';
import 고구마 from '../assets/imgs/groceries/고구마.png'
import 망고 from '../assets/imgs/groceries/망고.png'
import 멜론 from '../assets/imgs/groceries/멜론.png'
import 블루베리 from '../assets/imgs/groceries/블루베리.png'
import 수박 from '../assets/imgs/groceries/수박.png'
// import 랜덤 from '../assets/imgs/groceries/랜덤.png';
export default function FridgeSVG({
  time,
  onFridgeClick,
  onAlarmClick,
  selectedImages,
}) {
  const imageMap = {
    아보카도: 아보카도,
    감자: 감자,
    고추: 고추,
    귤: 귤,
    당근: 당근,
    대파: 대파,
    돼지고기: 돼지고기,
    딸기: 딸기,
    마늘: 마늘,
    무: 무,
    방울토마토: 방울토마토,
    배: 배,
    배추: 배추,
    버섯: 버섯,
    복숭아: 복숭아,
    사과: 사과,
    슬라이스치즈: 슬라이스치즈,
    애호박: 애호박,
    양배추: 양배추,
    양파: 양파,
    토마토: 토마토,
    포도: 포도,
    파프리카: 파프리카,
    고구마: 고구마,
    망고: 망고,
    멜론: 멜론,
    블루베리: 블루베리,
    수박: 수박
    // 랜덤: 랜덤,
  };

  const handleAlarmClick = () => {
    if (onAlarmClick) {
      onAlarmClick();
    }
  };
  const handleFridgeClick = () => {
    if (onFridgeClick) {
      onFridgeClick();
    }
  };
 const [foodOldItems, setFoodOldItems] = useRecoilState(foodOldItemsState);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <svg
        width='381'
        height='502'
        viewBox='0 0 381 502'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Link to='/fridge-inside' onClick={handleFridgeClick}>
          <rect width='381' height='487' fill='#86868B' />
          <rect
            x='11.4587'
            y='487.657'
            width='355.218'
            height='14.3429'
            fill='#414042'
          />
          <rect x='169.015' width='11.4586' height='487.657' fill='#BBBEC0' />
          <rect x='200.526' width='11.4586' height='487.657' fill='#BBBEC0' />
          <rect x='186.203' width='8.59398' height='487.657' fill='#232020' />
          <path
            d='M0 487.657L169.015 48.7657V487.657H0Z'
            fill='#6F7073'
            fill-opacity='0.5'
          />
          <path
            d='M211.985 487.657L381 0V487.657H211.985Z'
            fill='#6F7073'
            fill-opacity='0.5'
          />
          <rect
            x='34.3759'
            y='154.903'
            width='114.586'
            height='120.48'
            fill='#58595B'
            fill-opacity='0.75'
          />
          <rect
            x='48.6993'
            y='163.509'
            width='85.9398'
            height='100.4'
            fill='#312C2C'
          />
          <path
            d='M48.6993 192.194V163.509H134.639L48.6993 192.194Z'
            fill='#949393'
          />
          <rect
            x='65.8873'
            y='169.246'
            width='22.9173'
            height='17.2114'
            fill='#6D6E71'
          />
          <rect
            x='91.6692'
            y='177.851'
            width='8.59398'
            height='5.73714'
            fill='#428E6A'
          />
          <rect
            x='103.128'
            y='172.114'
            width='8.59398'
            height='5.73714'
            fill='#428E6A'
          />
          <rect
            x='103.128'
            y='183.589'
            width='8.59398'
            height='5.73714'
            fill='#428E6A'
          />
          <rect
            x='65.8873'
            y='197.931'
            width='45.8346'
            height='11.4743'
            fill='#A7A9AC'
          />
          <rect
            x='48.6993'
            y='258.171'
            width='85.9398'
            height='5.73714'
            fill='#A7A9AC'
          />
          <rect
            x='74.4812'
            y='209.406'
            width='5.72932'
            height='11.4743'
            fill='#A7A9AC'
          />
          <rect
            x='97.3985'
            y='209.406'
            width='5.72932'
            height='11.4743'
            fill='#A7
          A9AC'
          />
        </Link>
        <Link onClick={handleAlarmClick}>
          <rect
            width='145.349'
            height='215.509'
            transform='translate(220.48 54.5029)'
            fill='url(#paint0_linear_188_425)'
          />
          <rect
            x='231.654'
            y='104.011'
            width='123'
            height='156'
            fill='url(#paint1_linear_188_425)'
            fill-opacity='0.13'
          />
        </Link>
        {selectedImages.map((selectedImage, index) => (
          <image
            href={selectedImage}
            key={index}
            width='10'
            height='10'
            x={240 + index * 15}
            y={110}
          />
        ))}

        {/* <path
          d='M252.488 68.9487H259.775V89H256.562V71.9607H252.488V68.9487ZM269.179 80.0214C270.537 78.6445 271.503 77.564 272.077 76.7799C272.65 75.9958 272.937 75.2022 272.937 74.399C272.937 73.5958 272.631 72.9169 272.019 72.3623C271.407 71.7886 270.633 71.5017 269.696 71.5017C268.051 71.5017 266.684 72.3432 265.594 74.0261L262.869 72.4483C263.748 71.1288 264.714 70.1344 265.766 69.465C266.837 68.7957 268.204 68.461 269.868 68.461C271.551 68.461 273.023 68.9965 274.285 70.0674C275.548 71.1192 276.179 72.5631 276.179 74.399C276.179 75.4317 275.911 76.4165 275.376 77.3536C274.84 78.2907 273.855 79.4955 272.421 80.968L267.716 85.7585H276.81V89H263.098V86.1314L269.179 80.0214ZM285.871 88.5984C285.469 88.1777 285.268 87.6709 285.268 87.0781C285.268 86.4852 285.469 85.988 285.871 85.5864C286.291 85.1657 286.798 84.9553 287.391 84.9553C287.984 84.9553 288.491 85.1657 288.911 85.5864C289.332 85.988 289.542 86.4852 289.542 87.0781C289.542 87.6709 289.332 88.1777 288.911 88.5984C288.491 89.0191 287.984 89.2295 287.391 89.2295C286.798 89.2295 286.291 89.0191 285.871 88.5984ZM285.871 81.5704C285.469 81.1497 285.268 80.6429 285.268 80.0501C285.268 79.4572 285.469 78.96 285.871 78.5584C286.291 78.1377 286.798 77.9273 287.391 77.9273C287.984 77.9273 288.491 78.1377 288.911 78.5584C289.332 78.96 289.542 79.4572 289.542 80.0501C289.542 80.6429 289.332 81.1497 288.911 81.5704C288.491 81.9911 287.984 82.2015 287.391 82.2015C286.798 82.2015 286.291 81.9911 285.871 81.5704ZM302.622 73.4237C301.838 74.8006 301.446 76.6078 301.446 78.8453C301.446 81.0827 301.838 82.8899 302.622 84.2669C303.425 85.6438 304.669 86.3322 306.351 86.3322C308.034 86.3322 309.258 85.6533 310.023 84.2955C310.807 82.9186 311.199 81.1019 311.199 78.8453C311.199 76.5886 310.807 74.7814 310.023 73.4237C309.258 72.0467 308.034 71.3583 306.351 71.3583C304.669 71.3583 303.425 72.0467 302.622 73.4237ZM300.213 86.4183C298.855 84.525 298.176 82.0007 298.176 78.8453C298.176 75.6898 298.855 73.175 300.213 71.3009C301.57 69.4077 303.617 68.461 306.351 68.461C309.086 68.461 311.132 69.4077 312.49 71.3009C313.848 73.175 314.527 75.6898 314.527 78.8453C314.527 82.0007 313.848 84.525 312.49 86.4183C311.132 88.2924 309.086 89.2295 306.351 89.2295C303.617 89.2295 301.57 88.2924 300.213 86.4183ZM321.224 73.4237C320.44 74.8006 320.048 76.6078 320.048 78.8453C320.048 81.0827 320.44 82.8899 321.224 84.2669C322.027 85.6438 323.271 86.3322 324.953 86.3322C326.636 86.3322 327.86 85.6533 328.625 84.2955C329.409 82.9186 329.801 81.1019 329.801 78.8453C329.801 76.5886 329.409 74.7814 328.625 73.4237C327.86 72.0467 326.636 71.3583 324.953 71.3583C323.271 71.3583 322.027 72.0467 321.224 73.4237ZM318.815 86.4183C317.457 84.525 316.778 82.0007 316.778 78.8453C316.778 75.6898 317.457 73.175 318.815 71.3009C320.172 69.4077 322.219 68.461 324.953 68.461C327.688 68.461 329.734 69.4077 331.092 71.3009C332.45 73.175 333.129 75.6898 333.129 78.8453C333.129 82.0007 332.45 84.525 331.092 86.4183C329.734 88.2924 327.688 89.2295 324.953 89.2295C322.219 89.2295 320.172 88.2924 318.815 86.4183Z'
          fill='white'
        /> */}
        <text x='250' y='90' fill='white' fontFamily='SBAggroM' fontSize={30}>
          {time}
        </text>
        <defs>
          <linearGradient
            id='paint0_linear_188_425'
            x1='72.6743'
            y1='0'
            x2='72.6743'
            y2='215.509'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#6CC8C6' />
            <stop offset='0.5' stop-color='#6CC8C6' />
            <stop offset='1' stop-color='#6840C0' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_188_425'
            x1='293.154'
            y1='104.011'
            x2='293.154'
            y2='260.011'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FFFBFB' />
            <stop offset='0.46' stop-color='#6CC8C6' />
            <stop offset='1' stop-color='#453F3F' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
