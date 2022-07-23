import { button } from "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

// describe(Counter, () => {
    // it("should render", () => {
    //     const { getByText } = render(<Counter />);
    //     expect(getByText("Count:")).toBeInTheDocument();
    // }
    // )
    // it("should render initial count", () => {
    //     const { getByText } = render(<Counter initialCount={5} />);
    //     expect(getByText("5")).toBeInTheDocument();
    // }
    // )
    // it("should render increment button", () => {
    //     const { getByText } = render(<Counter />);
    //     expect(getByText("Increment")).toBeInTheDocument();
    // }
    // )
    // const {} = render(<Counter initialCount={5} />);
// })
describe('initialized with default count="15"', () => {
    beforeEach(() => {
        render(<Counter initialCount={15} />)
    })

    it("should displays the correct initial counter", () => {
        const initialValueOfCount = screen.getByRole("heading", {level : 1});
        expect(initialValueOfCount.textContent).toBe("Count: 15");
    })

    
    describe("when the incrementor changes to 5 and increment button is clicked",() => {
        beforeEach(() => {
            userEvent.type(screen.getByLabelText(/Incrementor/i), '{selectall}5');
            userEvent.click(screen.getByRole("button", {name: "Increment"}));
        })

        test('renders "Current Count: 15"', async() => {
            const initialValueOfCount = screen.getByRole("heading", {level : 1});
            await waitFor(() => expect(initialValueOfCount.textContent).toBe("Count: 15"));
        })

        it("renders too big and will disappear after 200ms", async() => {
            await waitForElementToBeRemoved(() => screen.queryByText("I am too small"));
        })
    })
    
    describe("when the incrementor changes to 25 and decrement button is clicked",() => {
        beforeEach(() => {
            userEvent.type(screen.getByLabelText(/Incrementor/i), '{selectall}25');
            userEvent.click(screen.getByRole("button", {name: "Decrement"}));
        })

        test('renders "Current Count: -15"', () => {
            const initialValueOfCount = screen.getByRole("heading", {level : 1});
            expect(initialValueOfCount.textContent).toBe("Count: -10")
        })
    })
})


test("Increment button should increment the count value by 1", async() => {
    render(<Counter initialCount={0} />)
    const incrementButton = screen.getByRole("button", {name: "Increment"});
    fireEvent.click(incrementButton);
    const initialValueOfCount = screen.getByRole("heading", {level : 1});
    await waitFor(() => expect(initialValueOfCount.textContent).toBe("Count: 1"));
})

test("Decrement button should decrement the count value by 1", () => {
    render(<Counter initialCount={0} />)
    const decrementBtn = screen.getByRole("button", {name: "Decrement"});
    const initialValueOfCount = screen.queryByRole("heading", {level : 1});
    expect(initialValueOfCount.textContent).toBe("Count: 0");
    fireEvent.click(decrementBtn);
    expect(initialValueOfCount.textContent).toBe("Count: -1");
});

test("Reset button will reset the value to 0", async() => {
    render(<Counter initialCount={2} />)
    const resetBtn = screen.getByRole("button", {name: "Reset"});
    const initialValueOfCount = screen.getByRole("heading", {level: 1});
    expect(initialValueOfCount.textContent).toBe("Count: 2")
    fireEvent.click(resetBtn);
    await waitFor(() => expect(initialValueOfCount.textContent).toBe("Count: 0"));
});

test("Switch Sign button will switch the sign of the value", () => {
    render(<Counter initialCount={2} />)
    const switchSignBtn = screen.getByRole("button", {name: "Switch Sign"});
    const initialValueOfCount = screen.getByRole("heading", {level: 1});
    expect(initialValueOfCount.textContent).toBe("Count: 2")
    fireEvent.click(switchSignBtn);
    expect(initialValueOfCount.textContent).toBe("Count: -2")
});
