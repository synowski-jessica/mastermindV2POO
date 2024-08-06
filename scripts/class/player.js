// class Player pour définir les joueurs

class Player {
  constructor(name) {
    this.name = name;
    this.attempts = [];
    this.score = 0;
    this.attemptsStats = 0;
  }

  createAttemptFromString(attempt) {
    this.attempts.push(attempt.split(","));
    return this.attempts;
  }

  increaseScore() {
    this.score++;
    return true;
  }

  increaseAttemptsStats() {
    this.attemptsStats++;
    return true;
  }

  getStatPlayer() {
    return (this.score / this.attemptsStats) * 100;
  }

  resetAttemps() {
    this.attempts = [];
    return true;
  }
}

module.exports = {
  Player,
};
