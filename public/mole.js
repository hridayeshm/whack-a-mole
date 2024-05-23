export default class Mole {
  constructor(hole, onWhack) {  //hole element for every mole instance created, whackMole {score ++} store
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
    // this.hole.classList.add("active");   USE LATER
    this.hole.appendChild(this.moleImage); //set mole image in hole (DOM)
/*store id */this.timeout = setTimeout(() => this.hide(), 2000);  // try bind this instead of arrow
    
  }
//emerge ma hide() timeout ma call hunxa, event occur vayexi manually call
  hide() {
    this.active = false;
    //this.hole.classList.remove("active");   USE LATER
    this.hole.removeChild(this.moleImage);
    clearTimeout(this.timeout);  //to clear mole before 2000 milliseconds ie if i whacked successfuly
  }

  handleClick() {
   
      if (this.active == true) { //if mole has emerged ie active true
        this.onWhack(); 

        this.hide();
      }
    
  }
}
