document.addEventListener("DOMContentLoaded", function () {
  const jokeElement = document.getElementById("joke");
  const generateJokeButton = document.getElementById("generateJoke");

  generateJokeButton.addEventListener("click", function () {
    fetchJoke();
  });

  function fetchJoke() {
    fetch(chrome.runtime.getURL("jokes.json"))
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const joke = data[randomIndex];
        jokeElement.textContent = joke;
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        jokeElement.textContent =
          "Failed to fetch joke. Please try again later.";
      });
  }
});
