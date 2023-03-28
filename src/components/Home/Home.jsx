import React, { useEffect, useState } from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import WacthCard from "../WacthCard/WacthCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [watchTimes, setWatchTimes] = useState("");

  const handleWatchTime = (time) => {
    const previousWarwatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWarwatchTime) {
      const sum = time + previousWarwatchTime;
      localStorage.setItem("watchTime", sum);
      setWatchTimes(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTimes(time);
    }
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 row gap-3">
          {movies.map((movie) => (
            <SingleMovie
              movie={movie}
              handleWatchTime={handleWatchTime}
            ></SingleMovie>
          ))}
        </div>
        <div className="col-lg-4">
          <WacthCard watchTimes={watchTimes}></WacthCard>
        </div>
      </div>
    </>
  );
};

export default Home;
