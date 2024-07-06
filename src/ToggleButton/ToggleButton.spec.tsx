import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { ToggleButton } from "./ToggleButton";

describe("ToggleButton", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should render the component", () => {
    const { container } = render(<ToggleButton onToggle={() => {}} />);
    expect(container).toBeDefined();
  });
  it("should call the onToggle function when clicked", () => {
    const onToggle = jest.fn();
    const { getByRole } = render(<ToggleButton onToggle={onToggle} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onToggle).toHaveBeenCalled();
  });

  it("should toggle the text when clicked", async () => {
    const { getByRole } = render(<ToggleButton onToggle={() => {}} />);
    const button = getByRole("button");

    expect(button).toHaveTextContent("Backwards");
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveTextContent("Forwards");
    });
  });
});
