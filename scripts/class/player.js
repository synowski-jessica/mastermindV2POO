// class Player pour définir les joueurs

class Player {
  constructor(name) {
    this.name = name;
    this.attempts = [];
    this.score = 0;
    this.attemptsStats = 0;
  }

  makeAttempt(attempt) {
    this.attempts.push(attempt.split(","));
    return this.attempts;
  }

  updateScore() {
    this.score++;
    return this.score;
  }

  updateAttemptsStats() {
    this.attemptsStats++;
    return this.attemptsStats;
  }

  getStatPlayer() {
    this.playerStats = (this.score / this.attemptsStats) * 100;
    return this.playerStats;
  }

  resetAttemps() {
    this.attempts = [];
    return this.attempts;
  }
}

module.exports = {
  Player,
};
