import React from "react";
import styled from "styled-components";
import { MySwiper } from "./swiper/Swiper";

function App() {
  return (
    <Wrapper>
      <Main>
        <Container>
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

const Container = styled.div``;
