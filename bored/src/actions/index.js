import axios from "axios";
export const FETCH_ACTIVITY = "FETCH_ACTIVITY";

export const getActivity = () => {
  return (dispatch) => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log("This is res", res);
        dispatch({ type: FETCH_ACTIVITY, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
