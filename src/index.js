// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//   e.currentTarget.innerText = "Hold still!";
//   e.currentTarget.setAttribute("disabled", "");
// });

// MOVIES GET REQUEST EXAMPLE
// const results = document.querySelector("#results");
// const form = document.querySelector("#search-movies");
// const input = document.querySelector("#keyword");
// const searchMovies = (query) => {
//   const url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;
//   console.log(url);
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       // const title = document.createElement("h2");
//       // title.innerText = data.Search[0].Title;
//       // console.log(title);
//       // const body = document.querySelector("body");
//       // body.appendChild(title);
//       data.Search.forEach((res) => {
//         const movieTag = `<li class="list-inline-item">
//       <img src="${res.Poster}" alt="">
//       <p>${res.Title}</p>
//     </li>`;
//         results.insertAdjacentHTML("beforeend", movieTag);
//       });
//     });
// };
// searchMovies("harry potter");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   results.innerHTML = "";
//   searchMovies(input.value);
// });

// POST REQUEST EXAMPLE
const searchInput = document.querySelector("#search");
const receiveResult = (query) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    // ES6 syntax for when your key and value are name the same
    body: JSON.stringify({ query }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
};
searchInput.addEventListener("keyup", (e) => {
  receiveResult(e.currentTarget.value);
});
