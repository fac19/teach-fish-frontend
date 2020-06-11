import styled from "styled-components";

const LandingContainer = styled.section`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const LandingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const StyledImg = styled.img`
  padding: 1rem;
  width: 6rem;
  align-self: center;

  @media (min-width: 768px) {
    width: 8rem;
`;

export { LandingContainer, LandingWrapper, StyledImg };
