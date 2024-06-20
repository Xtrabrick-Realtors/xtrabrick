import styled from "styled-components";

export const Embla = styled.div`
  /* max-width: 48rem; */
  margin: auto;
  width: 60rem;
  @media (max-width: 768px) {
    width: 24rem;
  }
`;

export const EmblaViewport = styled.div`
  /* overflow: hidden; */
`;

export const EmblaContainer = styled.div`
  display: flex;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 55%;
  min-width: 0;
  padding-left: 1rem;
  display: flex;
  justify-content: center;
`;

export const EmblaSlideNumber = styled.div`
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 10px;
  /* font-size: 4rem; */
  /* font-weight: 600; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 20rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-direction: column;
  position: relative;
  padding: 15px;
  @media (max-width: 768px) {
    padding: 10px;
    height: 32rem;
  }
`;

export const EmblaControls = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
`;

/* export const EmblaButtons = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 0.6rem;
 align-items: center;
`; */

/* export const EmblaButton = styled.button`
 -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
 -webkit-appearance: none;
 appearance: none;
 background-color: transparent;
 touch-action: manipulation;
 display: inline-flex;
 text-decoration: none;
 cursor: pointer;
 border: 0;
 padding: 0;
 margin: 0;
 box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
 width: 3.6rem;
 height: 3.6rem;
 z-index: 1;
 border-radius: 50%;
 color: var(--text-body);
 display: flex;
 align-items: center;
 justify-content: center;

 &:disabled {
 color: var(--detail-high-contrast);
 }
`; */

/* export const EmblaButtonSvg = styled.svg`
 width: 35%;
 height: 35%;
`; */

export const EmblaDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
`;

export const EmblaDot = styled.button`
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:after {
    box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    content: "";
  }

  &.embla__dot--selected:after {
    box-shadow: inset 0 0 0 0.2rem var(--text-body);
  }
`;

export const EmblaButtons = styled.div`
  display: flex;
  align-items: center;
  position: "relative";

  .embla__button {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    background-color: white;
  }

  .embla__button--prev {
    position: absolute;
    left: 30px;
    top: 55%;

    @media (max-width: 767px) {
      top: 25%;
      left: 5px;
    }
  }
  .embla__button--next {
    position: absolute;
    right: 30px;
    top: 55%;

    @media (max-width: 767px) {
      top: 25%;
      right: 5px;
    }
  }
`;
