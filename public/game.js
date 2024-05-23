import Mole from "./mole.js";

export default class Game {
  constructor(holes) {
    this.holes = holes; //array of hole elements
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
  }

  start() {
    
    this.moles = this.holes.map( //for each hole element, transform into new array
      (hole) => 
        
        new Mole(hole, this.whackMole.bind(this,hole)) //store 5 mole instances/objects in this.moles array
  );

    this.loop_for_popup();
  }

  loop_for_popup() {
    const time = 1000; //Math.random() * (2000 - 500) + 500;
    // console.log("$$$$$$$$$$$",this.moles[0], this.moles[3])
    const holeIndex = Math.floor(Math.random() * this.holes.length); //this.holes.length will also equal to this.moles.length, one mole for one hole

    const mole = this.moles[holeIndex]; //store one mole instance from an array of mole instances based on a randomized hole index
    // console.log("@@@@@@", mole.active); //will contain active property

    setTimeout(() => {
      if (!mole.active) {
        //that particular mole instance will never be active at this point of code, no instance will, for that matter
        
        mole.emerge();
      }
      this.loop_for_popup();
    }, time);
  }

  whackMole(hole) {
    console.log("########",hole)
    const holeId = hole.id;
    this.whackCount++;
    this.score++;
    console.log("countttt",this.whackCount);
    if (this.whackCount === 5) {
      this.whackCount = 0;
      const whackedElement = document.getElementById(holeId);
      //CONTINUE FROM HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
      whackedElement.appendChild(this.stunnedMoleImage);
    }
    
  }
}
