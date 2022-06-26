var film1 = document.querySelector(".film1");
var film2 = document.querySelector(".film2");
var film3 = document.querySelector(".film3");
var film4 = document.querySelector(".film4");

function toggle1(event) {
  return(document.getElementsByClassName(".film1").classList.toggle("smaller"));
}

function toggle2(event) {
  event.classList.toggle("column-wide");
  toggleForm(2);
  smaller(film1);
  smaller(film3);
  smaller(film4);
}

function toggle3(event) {
  event.classList.toggle("column-wide");
    toggleForm(3);
    smaller(film1);
    smaller(film2);
    smaller(film4);
}

function toggle4(event) {
    event.classList.toggle("column-wide");
    toggleForm(4);
    smaller(film1);
    smaller(film2);
    smaller(film3);
}


function toggleForm(number) {
  return(document.querySelector("#f"+number).classList.toggle("invisible"));
}

function smaller(film) {
  return(film.classList.toggle("smaller"));
}

function check() {
  var column = document.getElementsByClassName("column");
  var i;

  for (i = 0; i < column.length; i++) {
    column[i].classList.remove("column-wide");
    column[i].classList.remove("smaller");
    }

  for (i = 1; i < 4; i++) {
    document.querySelector("#f"+i).classList.remove("invisible");
    }

}

export {toggle1, toggle2, toggle3, toggle4, toggleForm, smaller};