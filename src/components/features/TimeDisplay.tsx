// TimeDisplay 컴포넌트에서 인자로 사용할 props 타입을 interface 클래스형태로 선언
interface TimeDisplayProps {
  time: {
    hour: number;
    am_pm: string;
    displayText: string;
  };
  onUpdate: () => void;
}

export const TimeDisplay = ({ time, onUpdate }: TimeDisplayProps) => (
  <div>
    <span>현재시각: {time.displayText}</span>
    <button
    // button 클릭시, onUpdate 함수 호출
      onClick={onUpdate}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      update
    </button>
  </div>
);

export default TimeDisplay;
