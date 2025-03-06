import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import VectorRight from "./../assets/Next.svg";
import VectorLeft from "./../assets/Prev.svg";

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
    <>
      <NavButtonsBlock>
        <ListPointsBlock>
          <b>06/06</b>
        </ListPointsBlock>
        <NavButton
          className="swiper-button-prev" 
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={VectorLeft} />
        </NavButton>
        <NavButton
          className="swiper-button-next" 
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={VectorRight} />
        </NavButton>
      </NavButtonsBlock>

      <SwiperContainer>
        <PrevButton
          className="swiper-button-prev"
          isVisible={!isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={VectorLeft} width={"7px"} height={"15px"} color="#3877EE" />
        </PrevButton>

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

        <NextButton
          className="swiper-button-next"
          isVisible={!isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={VectorRight} width={"7px"} height={"15px"} />
        </NextButton>
      </SwiperContainer>
    </>
  );
};

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavButtonsBlock = styled.div`
  display: flexbox;
  margin-bottom: 3%;
`;

const ListPointsBlock = styled.div`
  padding-bottom: 20px;

  b {
    font-family: PT Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #42567a;
  }
`;

const NavButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #42567a80;
  cursor: pointer;
  margin-right: 30px;
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

const NextButton = styled.button<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: absolute;
  right: 10%;
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

  box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
`;

const PrevButton = styled(NextButton)`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  left: 18%;
`;
