import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

export const TimelineWheel = ({
  pointsQuantity,
}: {
  pointsQuantity: number;
}) => {
  const dotsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const radius = 265; // Радиус круга
    const angle = (2 * Math.PI) / pointsQuantity; // Угол между точками

    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        const x = radius * Math.cos(angle * index); // X-координата
        const y = radius * Math.sin(angle * index); // Y-координата
        gsap.set(dot, { x: x - 7, y: y - 5 }); // Смещаем на радиус, чтобы точки были внутри круга
      }
    });
  }, []);

  return (
    <TimelineWheelWrap>
      <Circle />
      <Timeline>
        <span style={{ color: "#9DBEFD" }}>2015 </span>
        <span style={{ color: "rgba(255, 56, 225, 0.69)" }}>2022</span>
      </Timeline>
      {Array.from({ length: pointsQuantity }).map((_, index) => (
        <Dot
          key={index}
          ref={(el) => {
            if (el) {
              dotsRef.current[index] = el;
            }
          }}
        />
      ))}
    </TimelineWheelWrap>
  );
};

const TimelineWheelWrap = styled.div`
  position: absolute;
  width: 536px;
  height: 530px;
  top: 215px;
  left: 772px;
`;

const Timeline = styled.div`
  position: absolute;
  width: 973px;
  height: 160px;
  top: 180px;
  left: -160px;

  span {
    font-family: PT Sans;
    font-weight: 700;
    font-size: 200px;
    line-height: 160px;
    letter-spacing: -2%;
    text-align: center;
  }
`;

const Circle = styled.div`
  width: 530px;
  height: 530px;
  border: 1px solid rgba(66, 86, 122, 1);
  border-radius: 50%;
`;

const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -20%);
  background-color: rgba(66, 86, 122, 1);
`;
