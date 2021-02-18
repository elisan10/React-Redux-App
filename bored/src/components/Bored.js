import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getActivity } from "../actions/index";

const Bored = (props) => {
  const { activity, type, participants, getActivity } = props;
  useEffect(() => {
    getActivity();
  }, []);

  const handleClick = () => {
    getActivity();
  };
  return (
    <div className="bg-red-50 rounded-md m-6 my-8 p-8">
      <div className="flex space-x-12 justify-center">
        <h2 className="text-2xl">Let me tell you what to do...</h2>
        <button
          className="border border-gray-600 rounded-md p-2 px-4 hover:bg-blue-900 hover:text-white animate-bounce"
          onClick={handleClick}
        >
          Click me!
        </button>
      </div>
      <div classsName="">
        <p>Activity: {activity}</p>
        <p>Type: {type}</p>
        <p>Party for {participants}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("This is state in Bored", state);
  return {
    activity: state.activity,
    type: state.type,
    participants: state.participants,
  };
};

export default connect(mapStateToProps, { getActivity })(Bored);
