import { FETCH_ACTIVITY } from "./../actions/index";

const intialState = {
  activity: "",
  type: "",
  participants: 0,
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY:
      return {
        ...state,
        activity: action.payload.activity,
        type: action.payload.type,
        participants: action.payload.participants,
      };
    default:
      return state;
  }
};
