import styled from "styled-components";

export const CarouselContainer = styled.section`
  max-width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
`;

export const CarouselItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  height: 284px;`;

export const CarouselItem = styled.div`
  flex: 0 0 284px;
  min-height: 0;
  padding-top: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;


  .embla__slide__number {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    padding: 40px;
  }
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
`;

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  border: 0;
  padding: 0;
  margin: 0;
  width: 72px;
  height: 72px;
  z-index: 1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;

  &:disabled {
    visibility: hidden;
    cursor: not-allowed;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 75px;
  height: 160px;
`

export const ButtonSvg = styled.svg`
  width: 35%;
  height: 35%;
`;
