import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeDisplay from '@/components/features/TimeDisplay'
import SampleBox from '@/components/ui/SampleBox'
import MenuMessageContainer from '@/components/container/MenuMessageContainer'

function App() {
  // 1로 초기화 하여 state변수 time 선언, 업데이트 값을 받는 함수 setTime 선트  
  const [time, setTime] = useState(1)

  const handleClick = () => {
    setTime(time + 1)
  }

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
      <TimeDisplay time={time} onUpdate={handleClick} />
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
