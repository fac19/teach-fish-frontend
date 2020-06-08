import React from "react";
import { Link } from "../../components/global/links/Links";
import { Heading } from "../../components/global/heading/Heading";
import netlifyIdentity from "netlify-identity-widget";

const Landing = () => {
  return (
    <section>
      <Heading>Landing Page</Heading>
      <Link href="/about">Learn More</Link>
      <button onClick={() => netlifyIdentity.open()}>Log in here!</button>
    </section>
  );
};

export default Landing;
