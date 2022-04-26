const user = {
  userDisplay: "mario", 
  username: "mariomog", 
  age: 22,
  getUser: function(){
    return this.userDisplay
  },
  getResume: function(){
    return `user: ${this.userDisplay}, age: ${this.age}, bio: ${this.bio}`
  },
  getUserDisplay: function(username){
    return +username===+this.username?this.userDisplay:null
  }
}
const post = {
  post: "Motivational phrase", 
  date: "18/04/2022", 
  username: "mariomog",
  getPost: function(){
    return `${user.getUserDisplay(this.username)} | ${this.post} (${this.date})`
  }
}
const biography = {
  biography: "Insert generic bio.",
  username: "mariomog",
  getBio: function(){
    return `${user.getUserDisplay(this.username)} | ${this.biography}`
  }
}
console.log(user.getResume())
console.log(post.getPost())
console.log(biography.getBio())
