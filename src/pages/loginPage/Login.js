import React from "react";
import { TextButton } from "../../components/global/buttons/Buttons";
import UploadImage from "../../components/missions/uploadImage/UploadImage";

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <TextButton text="Upload Photo" onClick={(e) => UploadImage(e)} />
    </>
  );
};

export default Login;
