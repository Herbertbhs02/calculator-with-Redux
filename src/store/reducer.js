const initialState = {
  box1: "",
  box2: "",
  result: ""
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INPUT1":
      newState.box1 = action.value;
      break;

    case "INPUT2":
      newState.box2 = action.value;
      break;

    case "ADD":
      newState.result = newState.box1 + newState.box2;
      break;

    case "SUB":
      newState.result = newState.box1 - newState.box2;
      break;

    case "MULT":
      newState.result = newState.box1 * newState.box2;
      break;

    case "CLEAR":
      newState.result = "";
      newState.box1 = "";
      newState.box2 = "";
      break;
  }

  return newState;
};

export default reducer;
