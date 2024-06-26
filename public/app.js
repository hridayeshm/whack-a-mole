import Game from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  const holes = Array.from(document.querySelectorAll(".hole"));

  const game = new Game(holes);

  game.start();
});
