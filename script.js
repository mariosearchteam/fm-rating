document.addEventListener("DOMContentLoaded", () => {
  /* get DOM elements */
  const form = document.getElementById("ratingForm");
  const ratingSection = document.querySelector(".rating");
  const thankYouSection = document.querySelector(".thank-you");
  const ratingResultValue = document.querySelector(".rating__result__value");
  /* event listener */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    /* get the rating */
    const selectedRating = document.querySelector(
      'input[name="rating"]:checked'
    );
    /* error handling */
    if (!selectedRating) {
      alert("Please select a rating before submitting");
      return;
    }
    /* show rating value */
    ratingResultValue.textContent = selectedRating.value;
    /* hide rating section and show thank you section */
    ratingSection.classList.add("hide");
    thankYouSection.classList.remove("hide");
  });
});
