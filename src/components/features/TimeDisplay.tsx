interface TimeDisplayProps {
  time: number;
  onUpdate: () => void;
}

export const TimeDisplay = ({ time, onUpdate }: TimeDisplayProps) => (
  <div>
    <span>현재시각: {time}시&nbsp;</span>
    <button
      onClick={onUpdate}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      update
    </button>
  </div>
);

export default TimeDisplay;
