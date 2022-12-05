$(document).ready(function () {
  // solution fade-in animation
  const handleScrollSolution = () => {
    const solutionSection = document.getElementById("solution");
    const isRevealed = solutionSection.getBoundingClientRect().top < 450;
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      if (isRevealed) {
        reveals[i].classList.add("active");
        $(".scroll").off("scroll", handleScrollSolution);
      } else reveals[i].classList.remove("active");
    }
  };

  // value random-number animation
  const handleScrollValue = () => {
    const valueSection = document.getElementById("value");
    const isRevealed = valueSection.getBoundingClientRect().top <= 0;
    const randomNumbers = document.querySelectorAll("[random-number]");
    for (let i = 0; i < randomNumbers.length; i++) {
      const maxNumber = +$(randomNumbers[i]).data("max");
      const targetNumber = $(randomNumbers[i]).data("target");
      const isDecimal = targetNumber % 1 != 0;
      const randNumb = (Math.random() * maxNumber).toFixed(isDecimal ? 1 : 0);
      if (isRevealed) {
        $(randomNumbers[i]).text(targetNumber);
        $(".scroll").off("scroll", handleScrollValue);
      } else if (window.innerWidth >= 768) {
        $(randomNumbers[i]).text(randNumb);
      }
    }
  };

  $(".scroll").scroll(handleScrollSolution);
  $(".scroll").scroll(handleScrollValue);
});
