import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";

const WacthCard = ({ watchTimes }) => {
  //   console.log(watchTimes);
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  //   console.log(breakTime);

  const handleComplete = () => {
    const sum = time - breakTime;
    toast("Wow your total watch time is " + sum);
  };
  useEffect(() => {
    const getTime = JSON.parse(localStorage.getItem("watchTime"));
    setTime(getTime);
  }, [watchTimes]);
  return (
    <div className="position-sticky">
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={() => setBreakTime(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button
        onClick={() => setBreakTime(20)}
        className="w-25 btn-circle bg-warning btn btn-info"
      >
        20
      </button>
      <button
        onClick={() => setBreakTime(25)}
        className="w-25 btn-circle m-1 bg-danger btn btn-info"
      >
        25
      </button>
      <input type="text" value={breakTime} disabled />
      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  );
};

export default WacthCard;
