export class Question {
    constructor(data) {
        this.type = data.type
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.choices = ([...data.incorrect_answers, data.correct_answer])
    }

    get QuestionTemplate() {
        if (this.type == 'boolean') {
            return `<div class="question-box bg-light">
            <p class="m-0 p-3">${this.question}
            </p>
          </div>
        </div>

       
        <div class="col-12 text-center py-5">
            <button class="btn btn-light border border-dark rounded">${this.choices[1]}</button>
            <button class="btn btn-light border border-dark rounded">${this.choices[0]}</button>
        </div>`
        } else {

            return `<div class="question-box bg-light">
                <p class="m-0 p-3">${this.question}
                </p>
              </div>
            </div>
            <div class="col-12 text-center py-5">
               ${this.MultipleTemplate}           
            </div> `
        }
    }

    get MultipleTemplate() {
        this.choices.sort(() => Math.random() - 0.5);
        this.choices.sort(() => Math.random() - 0.5);
        this.choices.sort(() => Math.random() - 0.5);

        let template = ''
        this.choices.forEach(c => {
            template += ` <button onclick="app.questionsController.checkAnswer('${c}')" class="btn btn-light border border-dark rounded">${c}</button>`
        })
        return template
    }
}