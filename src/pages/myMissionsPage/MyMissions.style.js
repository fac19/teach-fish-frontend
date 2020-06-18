import styled from "styled-components";

const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid grey;
  max-width: 100px;
  padding: 1rem;
  background-color: grey;
`;

const Mission = styled.article`
  display: flex;
  flex-direction: row;
`;

const MissionIcon = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid grey;
  height: 3rem;
  width: 3rem;
  align-self: center;
`;

const MissionLink = styled.a`
  padding: 1rem;
  background-color: blue;
`;

export { Page, Avatar, Mission, MissionIcon, MissionLink };
