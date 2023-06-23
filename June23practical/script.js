const fetchMovies = async () => {
  const moviesContainer = document.getElementById("moviesContainer");
  try {
    const response = await fetch("http://localhost:3000/home");
    const jsonVariable = await response.json();
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    console.log(jsonVariable);
  } catch (error) {
    console.log(error);
  }
};
fetchMovies();
