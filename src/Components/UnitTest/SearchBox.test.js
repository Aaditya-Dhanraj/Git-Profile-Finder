import SearchBox from "../SearchBox/SearchBox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../Store/index";

describe("if searchbar working properly", () => {
  //test 1
  test("renders and expects text in the homescreen", () => {
    // Arrange
    render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    //Assert
    const outputElement = screen.getByTestId("search-button");
    expect(outputElement).toBeInTheDocument();
  });

  // test 2
  test("renders expanded search bar on the screen if the button is clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    // Act
    const buttonElement = screen.getByTestId("search-button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByPlaceholderText("Type to search");
    expect(outputElement).toBeInTheDocument();
  });

  // test 3
  test("renders cross button on the screen if search button is clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    // Act
    const openButtonElement = screen.getByTestId("search-button");
    userEvent.click(openButtonElement);

    //Assert
    const outputElement = screen.getByTestId("close-button");
    expect(outputElement).toBeInTheDocument();
  });
});
