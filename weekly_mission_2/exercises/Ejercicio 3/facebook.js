class User {
  constructor(userDisplay, username, age) {
    this.userDisplay = userDisplay
    this.username = username
    this.age = age
  }
  getUser() {
    return this.userDisplay
  }
  getResume() {
    return `user: ${this.userDisplay}, age: ${this.age}, bio: ${this.bio}`
  }
}

class Post {
  constructor(post, date, username) {
    this.post = post
    this.date = date
    this.username = username
  }
  getPost() {
    return `${this.username} | ${this.post} (${this.date})`
  }
}

class Biography {
  constructor(biography, username) {
    this.biography = biography
    this.username = username
  }

  getBio() {
    return `${this.username} | ${this.biography}`
  }
}

const myUser = new User('Mario Alejandro', 'mariomog', 22)
const myPost = new Post('Motivational phrase', '18/04/2022', 'mariomog')
const myBio = new Biography('Insert generic bio.', 'mariomog')
console.log(myUser.getResume())
console.log(myPost.getPost())
console.log(myBio.getBio())
