import React from "react";
import { Link } from "../../components/global/links/Links";
import { Heading } from "../../components/global/heading/Heading";

const Landing = () => {
  return (
    <section>
      <Heading>Landing Page</Heading>
      <Link href="/about">Learn More</Link>
    </section>
  );
};

export default Landing;
