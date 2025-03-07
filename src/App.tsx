import React from "react";
import styled from "styled-components";
import { MySwiper } from "./components/swiper/Swiper";
import { TimelineWheel } from "./components/timeline/TimelineWheel";

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

function App() {
  return (
    <Wrapper>
      <Title>Исторические даты</Title>
      <Main>
        <HorizontalLine />
        <VerticalLine />
        <TimelineWheel pointsQuantity={info.length} />
        <Container>
          <MySwiper info={info} />
        </Container>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  // padding-left: 16.6%;
  // padding-right: 8.4%;
  padding-left: 320px;
  padding-right: 160px;
`;

const Main = styled.main`
  // padding: 8.8% 2% 0 4%;
  width: 1440px;
  height: 1080px;

  border-width: 1px;

  border-left: 1px solid rgba(66, 86, 122, 1);
  border-right: 1px solid rgba(66, 86, 122, 1);
`;

const Title = styled.h1`
  position: absolute;
  width: 353px;
  height: 134px;
  top: 170px;
  padding-left: 78px;
  font-family: PT Sans;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #42567a;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #3877ee -5%, #ef5da8 85%);
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  // top: 50%;
  top: 480px;
  width: 75vw;
  height: 1px;
  background-color: rgba(66, 86, 122, 1);
`;

const VerticalLine = styled(HorizontalLine)`
  top: 0;
  width: 1px;
  height: 100%;
  left: 54%;
`;

const Container = styled.div`
  margin: 0 80px;
`;
