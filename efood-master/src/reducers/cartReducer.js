const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      const newItems = [...state.items];
      newItems.splice(action.payload, 1);
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
