// 간단한 UI 전용 컴포넌트 예제
// props 없이 정적인 UI만 담당
import React from 'react'

export default function SampleBox() {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded text-yellow-800 text-center mt-4">
      이것은 UI 전용 샘플 박스입니다.
    </div>
  )
}
