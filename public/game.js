import Mole from "./mole.js";

export default class Game {
  constructor(holes) {
    this.holes = holes;
    console.log(this.holes);
    this.moles = [];
    this.score = 0;
    console.log(this.score);
    this.whackCount = 0;
    this.stunnedMoleImage = document.createElement("img");
    this.stunnedMoleImage.src = "./stunnedMole.jpeg";
    this.stunnedMoleImage.classList.add("stunnedMole");
    this.moleImage = document.createElement("img");
    this.moleImage.src = "./mole.avif";
    this.time = 1000; //Math.random() * (2000 - 500) + 500;
    this.whackedElement;
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@", this.whackedElement);
  }

  start() {
    this.moles = this.holes.map(
      (hole) => new Mole(hole, this.whackMole.bind(this, hole))
    );

    this.loop_for_popup();
  }

  loop_for_popup() {
    console.log("!!!!!!!!!!!!!!!!!!!!!!",this.score)
    if(this.score >= 15){
      
      let winContainer = document.getElementById("win");
      winContainer.innerHTML =  '<span style="font-weight: bold; font-size: 34px; color: #1F305E;">ALL HAIL!!! YOU\'VE WON</span>';
  }
    if (this.whackCount < 5) {
     
      const holeIndex = Math.floor(Math.random() * this.holes.length);

      const mole = this.moles[holeIndex];

      setTimeout(() => {
        if (!mole.active) {
          mole.emerge();
        }
        this.loop_for_popup();
      }, 1000);
    }
  }

  whackStunnedMole(messageContainer) {
    this.whackCount = 0;
    this.score = this.score + 0.2;
    
    setTimeout(() => {
      if (
        this.stunnedMoleImage.parentNode === this.whackedElement &&
        this.whackCount === 0
      ) {
        this.whackedElement.removeChild(this.stunnedMoleImage);
        this.removeStunnedWhackListener();
        messageContainer.innerHTML = "";
      }
    }, 1500);
  }

  removeStunnedWhackListener() {
    this.whackedElement.removeEventListener(
      "click",
      this.whackStunnedMole.bind(this)
    );
  }

  whackMole(hole) {
    const holeId = hole.id;
    this.whackCount++;
    this.score++;
   
    let scoreContainer = document.getElementById("scoreKeeper");
    scoreContainer.innerHTML =
      '<span style="font-weight: bold; font-size: 34px; color: #1F305E;"> Current Score Is At: ' +
      Math.floor(this.score);
    console.log("countttt", this.whackCount);
    if (this.whackCount === 5) {
      let messageContainer = document.getElementById("displayer");
      messageContainer.innerHTML =
        '<span style="font-weight: bold; font-size: 34px; color: #1F305E;">MOLE STUNNED!!! CLICK REPEATEDLY TO WHACK THE LIVING HELL OUT OF IT</span>';
      this.whackedElement = document.getElementById(holeId);

      this.whackedElement.appendChild(this.stunnedMoleImage);
      this.whackedElement.addEventListener(
        "click",
        this.whackStunnedMole.bind(this, messageContainer)
      );

      console.log("check whack", this.whackedElement);
    }
  }
}
