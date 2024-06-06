import React from "react";
import styled from "styled-components";

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px; /* Adjust margin as needed */
`;

const Dot = styled.div<{ active: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${({ active }) => (active ? "#0173B0" : "white")};
  border: 0.5px solid ${({ active }) => (active ? "#0173B0" : "black")};
  border-radius: 50%;
  margin: 0 5px; /* Adjust margin as needed */
  cursor: pointer;
  margin-top: 25px;
`;

type PaginationProps = {
  totalSlides: number;
  activeIndex: number;
  onClick: (index: number) => void;
};

const PaginationDots: React.FC<PaginationProps> = ({ totalSlides, activeIndex, onClick }) => {
  return (
    <DotContainer>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Dot key={index} active={index === activeIndex} onClick={() => onClick(index)} />
      ))}
    </DotContainer>
  );
};

export default PaginationDots;