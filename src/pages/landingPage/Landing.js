import React from "react";
import Links from "../../components/global/links/Links";
import Heading from "../../components/global/heading/Heading";

const Landing = () => {
  return (
    <section>
      <Heading>Landing Page</Heading>
      <Links href="/about">Learn More</Links>
    </section>
  );
};

export default Landing;
