import React from "react";

const SingleMovie = ({ movie, handleWatchTime }) => {
  return (
    <>
      <div className="card text-center col-lg-4">
        <div className="img-container">
          <img
            className="card-img-top img-fluid w-50"
            src={movie.poster}
            alt=""
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.movieName}</h5>
          <p className="card-text">{movie.description}</p>
          <div className="d-flex justify-content-around">
            <p>watchTime :{movie.watchTime}</p>
            <p>Ratings :{movie.imdbRating}</p>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <button
            onClick={() => handleWatchTime(movie.watchTime)}
            className="btn btn-primary"
          >
            Book now
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
