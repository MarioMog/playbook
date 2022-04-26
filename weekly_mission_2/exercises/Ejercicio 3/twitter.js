class User {
  constructor(userDisplay, username, bio, age) {
    this.userDisplay = userDisplay
    this.username = username
    this.bio = bio
    this.age = age
  }
  getUser() {
    return mario
  }
  getResume() {
    return `user: ${this.userDisplay}, age: ${this.age}, bio: ${this.bio}`
  }
}
class TrendingTopic {
  constructor(keyWord, date, topic) {
    this.keyWord = keyWord
    this.date = date
    this.topic = topic
  }

  getTrendingTopic() {
    return `${this.topic} | ${this.keyWord} (${this.date})`
  }
}

class Hashtag {
  constructor(hashtag) {
    this.hashtag = hashtag
  }
  getHashtag() {
    return `#${this.hashtag}`
  }
}
const myUser = new User('mario', 'mariomog', 'Insert generic bio.', 22)
const myTrending = new TrendingTopic('Javascript', '18/04/2022', 'Technology')
const myHashtag = new Hashtag('friends')
console.log(myUser.getResume())
console.log(myHashtag.getHashtag())
console.log('Trending Topic:' + myTrending.getTrendingTopic())
