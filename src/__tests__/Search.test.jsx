import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../__mocks__/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const menuItem = screen.getAllByText(
    "Chicken Chilli Garlic Noodles - Half (500 ml)"
  );

  console.log(menuItem.length);

  expect(menuItem.length).toBeGreaterThan(0);
});
