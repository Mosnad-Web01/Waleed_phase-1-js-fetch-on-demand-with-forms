const init = () => {
  const inputForm = document.querySelector("form");
  const errorMessage = document.getElementById("errorMessage");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("searchByID").value;

    // Clear previous error message
    errorMessage.textContent = "";

    // Fetch movie data by ID
    fetch(`http://localhost:3000/movies/${input}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        return response.json();
      })
      .then((data) => {
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
