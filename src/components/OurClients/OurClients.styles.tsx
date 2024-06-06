import styled from "styled-components";

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    padding: 0px 10px;
  }
`;

export const ClientsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const ClientImageWrapper = styled.div`
  height: 100px;
  width: auto;

  @media (max-width: 767px) {
    height: 50px;
  }

  img {
    height: 100%;
    width: auto;

    @media (max-width: 767px) {
      height: 50px;
    }
  }
`;
