const repo = {
  name: 'LaunchX',
  author: 'carlogilmar',
  language: 'JavaScript',
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  },
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

// Ejemplo 5: Atributos con valores por default
const pullRequest = {
  repo: 'LaunchX',
  title: 'Mi Primer PR',
  lines_changed: 100,
  status: 'OPEN',
  dateCreated: new Date(), // esto guardará la fecha actual en que se instancia el objeto
  getInfo: function () {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  },
}

console.log('Nombre del repo:' + repo.name)
console.log(issue.getGeneralInfo())
console.log(pullRequest.getInfo())
