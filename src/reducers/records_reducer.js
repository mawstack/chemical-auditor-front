export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_RECORD":
      return [...state, action.payload];
    default:
      return state;
  }
};
