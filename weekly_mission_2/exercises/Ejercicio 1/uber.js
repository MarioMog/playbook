const profile = {
  userDisplay: "mario", 
  age: 22,
  credit: 300.5,
  userLvl: 5,
  getCredit: function() {
    return this.credit
  },
  getAll: function() {
    return `user: ${this.userDisplay}, age: ${this.age}, credit: ${this.credit}, userLvl: ${this.userLvl}`
  }
}

const travel = {
  client: "Mario", 
  partner: "Alejandro", 
  start: "myHouse", 
  destination: "center",
  getTravel: function() {
    return `From: ${this.start} To: ${this.destination}`
  }
}

console.log(profile.getAll())
console.log(travel.getTravel())
