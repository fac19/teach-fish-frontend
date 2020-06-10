import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
// import App from "../../../App";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from 'react-dom/test-utils';
// import { MemoryRouter } from "react-router-dom";
// import { createMemoryHistory } from 'history'
// import { screen } from '@testing-library/dom'

test("Navbar component is styled", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("position", "fixed");
});

// it("navigates home when you click the logo", async => {
//   const root = document.createElement('div');
//   document.body.appendChild(root);

//   // Render app
//   render(
//     <App />, root
//   );

//   const history = createMemoryHistory()
//   history.push('/my-missions')
//   console.log(history.location.pathname)
//   screen.debug()

//   // Interact with page
//   act(() => {
//     // Find the link (perhaps using the text content)
//     const goHomeLink = document.querySelector('#nav-icon-myProfile');
//     // Click it
//     goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   // Check correct page content showed up
//   expect(history.location.pathname).toBe("/my-profile");
// });
