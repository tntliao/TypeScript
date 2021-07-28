export default class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLeval: number;
    upScore: number;
    constructor(maxLeval: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLeval = maxLeval;
        this.upScore = upScore;
    }

    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score.toString();

        if (this.score % this.upScore === 0) {
            this.levalAdd();
        }
    }

    levalAdd() {
        if (this.level < this.maxLeval) {
            this.level++;
            this.levelEle.innerHTML = this.level.toString();
        }
    }
}
