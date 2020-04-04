const container = document.querySelector("container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // copy selected seats into arr
  // spread operator converts the node list into an array
  // map takes in a fx and puts them all in one array 
  const seatsIndex = [...selectedSeats].map(function(seat));

  // we need to get length of node list
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event

movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// seat click event.
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
