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
        setClearData={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
        clearData={false}
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
        setClearData={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
        clearData={false}
      />
    );

    const button = screen.getByText(/TEST/i);
    fireEvent.click(button);
    expect(onOpen).toHaveBeenCalled();

    const styles1 = getComputedStyle(button.parentElement.children[1]);
    expect(styles1.visibility).toBe("visible");
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
        setClearData={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
        clearData={false}
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
        setClearData={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
        clearData={false}
      />
    );

    const container = screen.getByText(/TEST/i).parentElement;
    fireEvent.mouseLeave(container);

    const styles = getComputedStyle(container.parentElement.children[1]);
    expect(styles.visibility).toBe("hidden");
  });
});
