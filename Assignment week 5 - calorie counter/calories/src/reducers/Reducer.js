import { combineReducers } from "redux";

const initState = [];
export const calorieReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [
        ...state,
        { ...action.entry, id: Date.now() }
      ];
    case "DELETE_ENTRY":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_ENTRY":
      const entry = state.filter((item) => item.id === action.id);
      state[state.indexOf(entry)]={item: action.entry.item, calories:action.item.calories, id:Date.now()};
      return state;
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  calorie: calorieReducer
});
