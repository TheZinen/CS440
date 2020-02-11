
// Default of the calculator
// This is what shows when you reset the calculator or first open it
export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
    outputValue: "0",
};

// Receives the number that is pressed on the calculator then return the value
export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
        return { currentValue: `${value}` };
    }
    return {
        currentValue: `${state.currentValue}${value}`
    };
}

// Constant that handles the operations/ mathematical calculations within our code
export const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
        operator: null,
        previousValue: null,
    };

    if (operator === "/") {
        return {
            outputValue: `${previous} / ${current}`,
            currentValue: previous / current,
            ...resetState
        };
    }

    if (operator === "*") {
        return {
            outputValue: `${previous} * ${current}`,
            currentValue: previous * current,
            ...resetState
        };
    }

    if (operator === "+") {
        return {
            outputValue: `${previous} + ${current}`,
            currentValue: previous + current,
            ...resetState
        };
    }

    if (operator === "-") {
        return {
            outputValue: `${previous} - ${current}`,
            currentValue: previous - current,
            ...resetState
        };
    }

    return state;
}

// Switch case for different operations on our calculator
const calculator = (type, value, state) => {
    switch (type) {
        case "number": return handleNumber(value, state);
        case "operator":
            {
                return {
                    operator: value,
                    previousValue: state.currentValue,
                    currentValue: "0",
                };
            }
        case "equal": return handleEqual(state);
        case "clear": return initialState;
        case "posneg":
            {
                return {
                    currentValue: `${parseFloat(state.currentValue) * -1}`
                };
            }
        case "percentage":
            {
                return {
                    currentValue: `${parseFloat(state.currentValue) * 0.01}`
                };
            }
        default:
            return state;
    }
}

export default calculator;