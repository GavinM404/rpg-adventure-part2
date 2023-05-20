const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom, items, currentRoom) {
    super(name, "main character", items, currentRoom);
    this.currentRoom = startingRoom;
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const index = this.currentRoom.items.findIndex(item => item.name === itemName);

     if (index !== -1) {
        const item = this.currentRoom.items.splice(index, 1)[0];
        this.items.push(item);
   }
}


  dropItem(itemName) {

      const index = this.items.findIndex(item => item.name === itemName);

       // if (index !== -1) {
          const item = this.items.splice(index, 1); //[0];
          console.log(item);
          console.log(this.items);
          console.log(this.currentRoom.items);
          this.currentRoom.items.push(item);

     // }
  }


  eatItem(itemName) {
    const index = this.items.findIndex(item => item.name === itemName);
    const item = this.items.slice(index, 1)[0];
    if (item instanceof Food) {
        const item = this.items.splice(index, 1)[0];
        console.log('Nom nom nom');
    } else {
        console.log(`${itemName} is not edible!!!`)
    }
}


  getItemByName(name) {
    return this.items.find(item => item.name === name)
}
  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
