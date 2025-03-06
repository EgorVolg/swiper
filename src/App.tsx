import React from "react";
import styled from "styled-components";
import { MySwiper } from "./components/swiper/Swiper";
import { TimelineWheel } from "./components/timeline/TimelineWheel";

function App() {
  return (
    <Wrapper>
      <Title>Исторические даты</Title>
      <Main>
        <Container>
          <TimelineWheel />
          <MySwiper />
        </Container>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding-left: 16.6%;
  padding-right: 8.4%;
`;

const Main = styled.main`
  padding: 8.8% 2% 4% 4%;

  border-left: 1px solid rgba(66, 86, 122, 1);
  border-right: 1px solid rgba(66, 86, 122, 1);

  height: 100%;
`;

const Title = styled.h1`
  position: absolute;
 

  padding-left: 7%;
  font-family: PT Sans;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #42567a;

   &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px; 
    height: 100%;
    background: linear-gradient(to bottom, #3877ee -5%, #ef5da8 85%);
  }
`;

const Container = styled.div`
  margin: 0 80px;
`;
