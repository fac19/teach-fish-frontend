import React from "react";
import Links from "../../components/global/links/Links";
import Heading from "../../components/global/heading/Heading";
import { useHistory } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

const Landing = () => {
  const history = useHistory();
  return (
    <section>
      <Heading>Landing Page</Heading>
      <Links href="/about">Learn More</Links>
      <button
        onClick={() => {
          netlifyIdentity.open();
          history.push(`/signup`);
        }}>
        Log in here!
      </button>
    </section>
  );
};

export default Landing;
