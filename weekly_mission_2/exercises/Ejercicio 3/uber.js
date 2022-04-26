class Profile {
  constructor(userDisplay, age, credit, userLvl) {
    this.userDisplay = userDisplay
    this.age = age
    this.credit = credit
    this.userLvl = userLvl
  }
  getCredit() {
    return this.credit
  }
  getAll() {
    return `user: ${this.userDisplay}, age: ${this.age}, credit: ${this.credit}, userLvl: ${this.userLvl}`
  }
}

class Travel {
  constructor(client, partner, start, destination) {
    this.client = client
    this.partner = partner
    this.start = start
    this.destination = destination
  }
  getTravel() {
    return `From: ${this.start} To: ${this.destination}`
  }
}
const myProfile = new Profile('mario', 22, 300.5, 5)
const myTravel = new Travel('Mario', 'Alejandro', 'myHouse', 'center')
console.log(myProfile.getAll())
console.log(myTravel.getTravel())
