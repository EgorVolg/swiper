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
    const angle = (2 * Math.PI) / 6; // Угол между точками

    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        const x = radius * Math.cos(angle * index);
        const y = radius * Math.sin(angle * index);
        gsap.set(dot, { x, y });
      }
    });
  }, []);

  return (
    <TimelineWheelWrap>
      <Circle />
      {[pointsQuantity].map((_, index) => (
        <Point
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
  position: relative;
  width: 536px;
  height: 530px;
  margin: 0 auto;
`;

const Circle = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(66, 86, 122, 1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Point = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(66, 86, 122, 1);
`;
