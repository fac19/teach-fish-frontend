import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const ImageUploadNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const StyledIcon = styled.img`
margin-left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  align-self: center;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
`;

const UploadedImageDisplay = styled.img`
  max-height: 15rem;
  max-width: 15rem;
  object-fit: cover;
`;

const SubmitStep = styled.div`
  text-align: center;
`;

export {
  FormContainer,
  FormInputWrapper,
  ImageUploadNotification,
  StyledIcon,
  UploadedImageDisplay,
  SubmitStep,
};
