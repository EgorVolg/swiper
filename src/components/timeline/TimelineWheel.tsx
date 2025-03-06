import React from "react";
import styled from "styled-components";
import VectorRight from "./../assets/Next.svg";
import VectorLeft from "./../assets/Prev.svg";
export const TimelineWheel = () => {
  return (
    <TimelineWheelWrap>
      <NavButtonsBlock>
        <ListPointsBlock>
          <b>06/06</b>
        </ListPointsBlock>
        <NavButton>
          <img src={VectorLeft} />
        </NavButton>
        <NavButton>
          <img src={VectorRight} />
        </NavButton>
      </NavButtonsBlock>
    </TimelineWheelWrap>
  );
};

const TimelineWheelWrap = styled.div`
  margin: 0 80px;
`;

const NavButtonsBlock = styled.div`
  display: flexbox; 
`;

const ListPointsBlock = styled.div`
  padding-bottom: 20px;

  b {
    font-family: PT Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #42567A;
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
