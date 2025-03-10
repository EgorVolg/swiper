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
      <Main>
        <HorizontalLine />
        <VerticalLine />
        <Title>Исторические даты</Title>
        <Container>
          <TimelineWheel info={info} />
        </Container>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  box-sizing: border-box;
  margin-left: 16.6%;
  margin-right: 8.4%;

  height: 100%;
  border-left: 1px solid rgba(66, 86, 122, 1);
  border-right: 1px solid rgba(66, 86, 122, 1);
`;

const Title = styled.div`
  position: absolute;
  top: 8.85%;
  left: 10%;
`;

const HorizontalLine = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #42567a;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #42567a;
`;

const Container = styled.div`
  position: relative;

  box-sizing: border-box; 
  padding: 5.5% 10%;
  width: 100%;
  height: 100%;
`;
