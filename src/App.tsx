import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeDisplay from '@/components/features/TimeDisplay'
import SampleBox from '@/components/ui/SampleBox'
import MenuMessageContainer from '@/components/container/MenuMessageContainer'

function App() {
  // 1로 초기화 하여 state변수 time 선언, 업데이트 값을 받는 함수 setTime 선언
  // const로 선언한 time을 setTime을 통해 상태를 업데이트하는 것은 완전히 정상적인 React 패턴
  const [time, setTime] = useState(1)

  // handleClick 함수는 time 상태를 증가시키고, 24시간이 되면 1로 리셋
  const handleClick = () => {
    const hour_24 = time + 1;
    // 24시간 초과 시 1로 리셋하여 최대 24시간으로만 표시 (업데이트 되는 상태변수는 time임에 유의)
    setTime(hour_24 > 24 ? 1 : hour_24); 
  };

  // getTimeWithPeriod 함수는 시간을 12시간 기준으로 변환하고, AM/PM을 추가하여 객체로 반환
  // 24시간 이내로 순환하도록 처리된 time에 대하여 12시간 기준으로 변환하여 AM/PM을 추가 
  const getTimeWithPeriod = () => {
    const hour = time % 12 === 0 ? 12 : time % 12;
    const isAM = time < 12 || time === 24;
    return {
      hour,
      am_pm: isAM ? 'AM' : 'PM',
      displayText: `${hour} ${isAM ? 'AM' : 'PM'}`
    };
  };

  console.log('App 컴포넌트가 다시 렌더링되었습니다.')

  return (
    <>
      {/* 상단 로고 */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* 기능 컴포넌트: 시계 컴포넌트 가져오기 */}
      <TimeDisplay time={getTimeWithPeriod()} onUpdate={handleClick} />
      <br />

      {/* 컨테이너 컴포넌트: 식당 비즈니스 매뉴 컴포넌트 추가 */}
      <MenuMessageContainer time={time} />
      <br />
      
      {/* UI 컴포넌트: 디자인 컴포넌트 추가 */}
      <SampleBox />
    </>
  )
}

export default App
