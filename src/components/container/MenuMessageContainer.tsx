import React from "react";

interface MenuMessageContainerProps {
  time: number; // 24시간제 정수(0~23)
}

/**
 * 현재 시각(time)에 따라 아침/점심/저녁 메뉴 메시지를 보여주는 컨테이너 컴포넌트
 * - 오전(0~11): "아침매뉴는 미역국입니다."
 * - 오후(12~18): "오늘 점심은 칼국수입니다."
 * - 저녁(19~23): "저녁에는 파전과 동동주를 판매합니다"
 */
const MenuMessageContainer: React.FC<MenuMessageContainerProps> = ({ time }) => {
  let message = "";
  if (time >= 0 && time < 12) {
    message = "아침매뉴는 미역국입니다.";
  } else if (time >= 12 && time < 19) {
    message = "오늘 점심은 칼국수입니다.";
  } else if (time >= 19 && time <= 23) {
    message = "저녁에는 파전과 동동주를 판매합니다";
  } else {
    message = "시간 정보가 올바르지 않습니다.";
  }

  return (
    <div className="mt-4 p-4 bg-yellow-50 rounded shadow text-gray-800 text-lg">
      {message}
    </div>
  );
};

export default MenuMessageContainer;
