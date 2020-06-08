import React from "react";
import Links from "../../components/global/links/Links";
import Heading from "../../components/global/heading/Heading";
import TextArea from "../../components/global/forms/textArea/TextArea";

const Landing = () => {
  return (
    <section>
      <Heading>Landing Page</Heading>
      <Links href="/about">Learn More</Links>
      <TextArea label={"Task Two"} />
    </section>
  );
};

export default Landing;
