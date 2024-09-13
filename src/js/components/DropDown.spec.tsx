import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DropDown from "./DropDown";

describe("DropDown Component", () => {
  const title = "Test";
  const data = ["Item1", "Item2", "Item3"];
  const onOpen = jest.fn();
  const onChanged = jest.fn();
  const depth = 1;

  test("renders DropDown component", () => {
    const { asFragment } = render(
      <DropDown
        title={title}
        data={data}
        onOpen={onOpen}
        onChanged={onChanged}
        open={false}
        depth={depth}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("toggles panel visibility on button click", () => {
    render(
      <DropDown
        title={title}
        data={data}
        onOpen={onOpen}
        onChanged={onChanged}
        open={false}
        depth={depth}
      />
    );

    const button = screen.getByText(/TEST/i);
    fireEvent.click(button);
    expect(onOpen).toHaveBeenCalled();
    //expect(screen.getByText(/ALL/i).parentElement?.parentElement).toHaveStyle("visibility: visible"); // Use the toHaveStyle matcher

    fireEvent.click(button);
    //expect(screen.getByText(/ALL/i).parentElement?.parentElement).toHaveStyle("visibility: hidden"); // Use the toHaveStyle matcher
  });

  test("calls onChanged with correct values on item selection", () => {
    render(
      <DropDown
        title={title}
        data={data}
        onOpen={onOpen}
        onChanged={onChanged}
        open={false}
        depth={depth}
      />
    );

    const checkbox = screen.getByLabelText(/ITEM1/i);
    fireEvent.click(checkbox);
    expect(onChanged).toHaveBeenCalledWith(["Item1"]);

    fireEvent.click(checkbox);
    expect(onChanged).toHaveBeenCalledWith([]);
  });

  test("hides panel on mouse leave", () => {
    render(
      <DropDown
        title={title}
        data={data}
        onOpen={onOpen}
        onChanged={onChanged}
        open={true}
        depth={depth}
      />
    );

    const container = screen.getByText(/TEST/i).parentElement;
    fireEvent.mouseLeave(container);
   // expect(screen.getByText(/ALL/i).parentElement?.parentElement).toHaveStyle("visibility: hidden"); // Use the toHaveStyle matcher
  });
});