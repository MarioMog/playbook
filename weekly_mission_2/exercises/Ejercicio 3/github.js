class Repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

const issue = {
  title: 'Issue1',
  repositoryNameAssociated: 'LaunchX',
  status: 'OPEN',
  numberOfComments: '3',
  labels: 'Bug',
  author: 'MarioMog',
  dateCreated: '20/04/2022',
  lastUpdated: '22/04/2022',
  getTitleAndAuthor: function () {
    return `Title: ${this.title}\nAuthor: ${this.author}`
  },
  getGeneralInfo: function () {
    return `General info
____________________________
Title: ${this.title}
Author: ${this.author}
Creation Date: ${this.dateCreated}
Status: ${this.status}
Last time update: ${this.lastUpdated}`
  },
}
class Issue {
  constructor(
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdated
  ) {
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.author = author
    this.dateCreated = dateCreated
    this.lastUpdated = lastUpdated
  }

  getTitleAndAuthor() {
    return `Title: ${this.title}\nAuthor: ${this.author}`
  }
  getGeneralInfo() {
    return `General info
____________________________
Title: ${this.title}
Author: ${this.author}
Creation Date: ${this.dateCreated}
Status: ${this.status}
Last time update: ${this.lastUpdated}`
  }
}

class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo
    this.title = title
    this.lines_changed = lines_changed
    this.status = 'OPEN'
    this.dateCreated = new Date()
  }
  getStatus() {
    return `Current status: ${this.status}`
  }
  getInfo() {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

const myRepository = new Repo(
  'LaunchX',
  'carlogilmar',
  'JavaScript',
  100,
  199,
  299,
  10,
  10
)
const myPR1 = new PullRequest('LaunchX', 'Mi Primer PR', 100)
const myIssue1 = new Issue(
  'Issue1',
  'LaunchX',
  'OPEN',
  '5',
  'Bug',
  'MarioMog',
  '20/04/2022',
  '22/04/2022'
)
console.log(myRepository.getGeneralInfo())
console.log(myPR1.getInfo())
console.log(myIssue1.getGeneralInfo())
