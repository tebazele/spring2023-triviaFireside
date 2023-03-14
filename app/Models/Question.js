export class Question {
    constructor(data) {
        // FIXME create model
        this.category = data.category
        this.correct_answer = data.correct_answer
        // this.difficulty = data.difficulty
        this.question = data.question
        this.type = data.type
        this.choices = [...data.incorrect_answers, data.correct_answer]
    }

    get QuestionTemplate() {
        return ``
    }
}