import React from "react";
// import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import BackIcon from "./BackIcon";
// import { useHistory } from "react-router-dom";

// import App from "../../../../App";

// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from 'react-dom/test-utils';
// import { MemoryRouter } from "react-router-dom";

test("BackIcon component is styled", () => {
  const tree = renderer.create(<BackIcon />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("height", "2.5rem");
});

// Testing that the button takes us to the previous page when clicked. Cannot be tested in isolation as there is no "back", the page is immediately rendered. Will have to implement end to end testing where test starts on home page > moves forward to about page > clicks back button > reverts to home page. (expect location to be "/")
/* 
test("Navigates to previous page when clicked", async => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>,
        root
    );

      act(() => {
        // Find the link (perhaps using the text content)
        const backButton = screen.getByLabelText("Go back to previous page");
        // Click it
        backButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      // expect(document.body.textContent).toBe(useHistory()); OR
      expect(history.location.pathname).toBe("/");
})
*/
