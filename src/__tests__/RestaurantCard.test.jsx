import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";
import { withDiscountLabel } from "../RestaurantCard";

it("Should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurant = screen.getByText("Chinese Wok");

  expect(restaurant).toBeInTheDocument();
});

const RestaurantCardDiscounted = withDiscountLabel(RestaurantCard);

it("Should render discounted level inside card", () => {
  render(<RestaurantCardDiscounted resData={MOCK_DATA} />);

  const discountLabel = screen.getByText("ITEMS");

  expect(discountLabel).toBeInTheDocument();
});
