import styled from "styled-components";
import { MySwiper } from "../swiper/Swiper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const TimelineWheel = ({
  info,
}: {
  info: { year: number; title: string }[];
}) => {
  const elementRef = useRef(null);
  const [widthInPixels, setWidthInPixels] = useState("");

  const dotsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (elementRef.current) {
      const computedStyles = window.getComputedStyle(elementRef.current);
      setWidthInPixels(computedStyles.width);
      console.log(widthInPixels);

      const radius = parseInt(widthInPixels) / 2; // Радиус круга
      const angle = (2 * Math.PI) / info.length; // Угол между точками

      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          const x = radius * Math.cos(angle * index); // X-координата
          const y = radius * Math.sin(angle * index); // Y-координата
          gsap.set(dot, { x: x - 4, y: y - 5 }); // Смещаем на радиус, чтобы точки были внутри круга
        }
      });
    }
  }, [widthInPixels]);

  return (
    <Container>
      <CircleContainer ref={elementRef}>
        <Circle />
        {info.map((_, index) => (
          <Dot
            ref={(el) => {
              if (el) {
                dotsRef.current[index] = el;
              }
            }}
            key={index}
          />
        ))}
      </CircleContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
`;

const CircleContainer = styled.div`
  width: 23vw;
  height: 23vw;
`;

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
