export const calculator = [
  {
    label: "C",
    value: "clear",
    type: "clear",
    short: true,
    color: "default",
  },
  {
    label: "+/-",
    value: "abs",
    type: "abs",
    short: true,
    color: "default",
  },
  {
    label: "%",
    value: "percent",
    type: "percent",
    short: true,
    color: "default",
  },
  {
    label: "+",
    value: "+",
    type: "operator",
    short: true,
    color: "green-soft",
  },
  {
    label: "1",
    value: 1,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "2",
    value: 2,
    short: true,
    type: "number",
    color: "default",
  },
  {
    label: "3",
    value: 3,
    short: true,
    type: "number",
    color: "default",
  },
  {
    label: "-",
    value: "-",
    type: "operator",
    short: true,
    color: "green-soft",
  },
  {
    label: "4",
    value: 4,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "5",
    value: 5,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "6",
    value: 6,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "x",
    value: "x",
    type: "operator",
    short: true,
    color: "green-soft",
  },
  {
    label: "7",
    value: 7,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "8",
    value: 8,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "9",
    value: 9,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "/",
    value: "/",
    type: "operator",
    short: true,
    color: "green-soft",
  },
  {
    label: "0",
    value: 0,
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: ".",
    value: ".",
    type: "number",
    short: true,
    color: "default",
  },
  {
    label: "=",
    value: "equal",
    type: "equal",
    short: false,
    color: "regal-blue",
    textColor: "white",
  },
];

export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: "0",
};

export const handleNumber = (value, state) => {
  const { previousValue, operator } = state;
  if (state.currentValue === "0") {
    return { currentValue: `${value}`, operator, previousValue };
  }
  return {
    currentValue: `${state.currentValue}${value}`,
    operator,
    previousValue,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

export const executeCalculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return initialState;
    case "abs":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percent":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    default:
      return state;
  }
};
