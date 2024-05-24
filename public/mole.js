export default class Mole {
  constructor(hole, onWhack) {
    this.hole = hole;
    this.onWhack = onWhack;
    this.active = false;
    this.timeout = null;
    this.moleImage = document.createElement("img");
    this.moleImage.src = "./mole.avif";
    this.moleImage.classList.add("mole");
    this.moleImage.addEventListener("click", this.handleClick.bind(this));
  }

  emerge() {
    this.active = true;

    this.hole.appendChild(this.moleImage);
    this.timeout = setTimeout(() => this.hide(), 800);
  }

  hide() {
    this.active = false;

    this.hole.removeChild(this.moleImage);
    clearTimeout(this.timeout);
  }

  handleClick() {
    console.log("THIS ONEEEEEEEEEEEE", this.hole);
    if (this.active == true) {
      this.onWhack();

      this.hide();
    }
  }
}
