import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Store/index";
import TopProfileSection from "../TopProfileSec/TopProfileSection";

describe("if repos fetching working properly", () => {
  //test 1
  test("if data management and state rendering is working properly", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TopProfileSection />
      </Provider>
    );

    //Assert
    const cardsItemElement = screen.queryByTestId("name");
    expect(cardsItemElement).toBeNull();
  });
});
