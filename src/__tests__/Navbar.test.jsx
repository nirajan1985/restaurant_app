import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

//Rendering
it("Should render login button in Navbar component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByRole("button");

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
