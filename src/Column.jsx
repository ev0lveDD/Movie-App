import React from "react";
import {toggle1, toggle2, toggle3, toggle4} from "./script.js";

function Column(props) {
    return(
        <div className="column" id={props.filmId} onclick="toggle1(this)">
        <h1>{props.filmNumber}</h1>
        <div className="right-line">
            <hr className="title-line"></hr>
            <h2>{props.filmName}</h2>
        </div>
        <div className="details" id="f1">
          <h1>{props.filmName}</h1>
          <h3>{props.filmTagLine}</h3>
          <p>
            {props.filmBio}
          </p>
          <div className="details-info">
            <div className="movie-details">
              <h5>Director: </h5>
              <h5>Actors: </h5>
              <h5>In Theaters: </h5>
              <h5>Studio: </h5>
            </div>
            <div className="movie-details">
              <p>Chad Stahelski</p>
              <p>Keanu Reeves, Ruby Rose</p>
              <p>January 30 2017 </p>
              <p>Summit Entertainment</p>
            </div>
          </div>
          <hr></hr>
          <div className="icons">
            <p><i className="fa fa-clock-o fa-lg"></i> 2h 10min</p>
            <p><i className="fa-solid fa-film fa-lg"></i> Action/Thriller</p>
            <p><i className="fa-solid fa-chart-line fa-lg"></i> Popularity 122</p>
          </div>
        </div>
      </div>
    );
};

export default Column;
