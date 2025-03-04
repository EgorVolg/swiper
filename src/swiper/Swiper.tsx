import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import VectorRight from "./VectorRight.svg";

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
  
export const MySwiper = () => {
  

  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => {
          console.log(swiper);
        }}
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <InfoBlock>
              <YearText>{item.year}</YearText>
              <Info>{item.title}</Info>
            </InfoBlock>
          </SwiperSlide>
        ))}
      </Swiper>
      <NextButton>
        <img src={VectorRight} width={"7px"} height={"15px"} />
      </NextButton>
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
  color: #000000;
`;

const Info = styled.div`
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;
  color: #42567a;
`;

const NextButton = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
