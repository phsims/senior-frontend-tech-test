import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Cypher } from "./Cypher";

describe("Cypher", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render the component", () => {
    const { container } = render(<Cypher />);
    expect(container).toBeDefined();
  });

  it("updates output message on input change", () => {
    const { getByText, getByRole ,getByTestId} = render(<Cypher />);
    const input = getByRole("textbox");
    const submitButton = getByTestId("submit");
    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(submitButton);
    expect(getByText("mjqqt")).toBeInTheDocument();
  });

  it("toggles the output message", async () => {
    const { getByRole, getByText, getByTestId } = render(<Cypher />);
    const input = getByRole("textbox");
    const submitButton = getByTestId("submit");
    const toggleButton = getByTestId("toggle");
    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(submitButton);
    
    await waitFor(() => expect(getByText("mjqqt")).toBeInTheDocument());

    fireEvent.click(toggleButton);
    await waitFor(() => expect(getByText("tqqjm")).toBeInTheDocument());
  });
});
