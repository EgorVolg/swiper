import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import VectorRight from "./VectorRight.svg";
import VectorLeft from "./VectorLeft.svg";

const info = [
  {
    year: 2015,
    title:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2016,
    title:
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
  },
  {
    year: 2017,
    title:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    year: 2015,
    title:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    year: 2016,
    title:
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
  },
  {
    year: 2017,
    title:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
];

SwiperCore.use([Navigation]);

export const MySwiper = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <SwiperContainer>
      <ButtonContainer>
        <PrevButton
          className="swiper-button-prev"
          isVisible={!isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={VectorLeft} width={"7px"} height={"15px"} color="#3877EE" />
        </PrevButton>
      </ButtonContainer>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <InfoBlock>
              <YearText>{item.year} </YearText>
              <Info>{item.title}</Info>
            </InfoBlock>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonContainer>
        <NextButton
          className="swiper-button-next"
          isVisible={!isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={VectorRight} width={"7px"} height={"15px"} />
        </NextButton>
      </ButtonContainer>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const InfoBlock = styled.div`
  height: 7%;
`;

const YearText = styled.p`
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0%;
  color: #3877ee;
`;

const Info = styled.div`
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;
  color: #42567a;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: colunm;
  width: 60px;

`;

const NextButton = styled.button<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: absolute;
 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const PrevButton = styled(NextButton)`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
`;
