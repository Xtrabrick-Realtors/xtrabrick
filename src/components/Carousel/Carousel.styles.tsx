import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CarouselItemContainer = styled.div<{ slidesToShow: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ slidesToShow }) =>
    slidesToShow > 1 ? "0 10px" : "0"}; // Add padding if slidesToShow > 1
  justify-content: ${({ slidesToShow }) =>
    slidesToShow > 1
      ? "center"
      : "flex-start"}; // Center slides if slidesToShow > 1
`;

export const CarouselItem = styled.div<{ slidesToShow: number }>`
  position: relative;
  flex: ${({ slidesToShow }) =>
    slidesToShow > 1 ? `0 0 calc(100% / ${slidesToShow} - 10px)` : "0 0 100%"};
  box-sizing: border-box;
  margin: ${({ slidesToShow }) => (slidesToShow > 1 ? "0 5px" : "0")};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: "relative";

  .embla__button {
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }

  .embla__button--prev {
    position: absolute;
    left: 30px;
    top: 45%;

    @media (max-width: 767px) {
      top: 25%;
      left: 5px;
    }
  }
  .embla__button--next {
    position: absolute;
    right: 30px;
    top: 45%;

    @media (max-width: 767px) {
      top: 25%;
      right: 5px;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: "relative";
`;
