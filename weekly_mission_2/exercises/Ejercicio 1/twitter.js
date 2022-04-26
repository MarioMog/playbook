const user = {
  userDisplay: "mario", 
  username: "mariomog", 
  bio: "Insert generic bio.", 
  age: 22,
  getUser: function(){
    return mario
  },
  getResume: function(){
    return `user: ${this.userDisplay}, age: ${this.age}, bio: ${this.bio}`
  }
}
const trending_topic = {
  keyWord: "Javascript", 
  date: "18/04/2022", 
  topic: "Technology",
  getTrendingTopic: function(){
    return `${this.topic} | ${this.keyWord} (${this.date})`
  }
}
const hashtag = {
  hashtag: "friends",
  getHashtag: function(){
    return `#${this.hashtag}`
  }
}
console.log(user.getResume())
console.log(hashtag.getHashtag())
console.log("Trending Topic:" + trending_topic.getTrendingTopic())
