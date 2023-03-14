export class Question {
    constructor(data) {
        // FIXME create model
        this.category = data.category
        this.correct_answer = data.correct_answer.includes("'") ? data.correct_answer.replace("'", '') : data.correct_answer
        // this.difficulty = data.difficulty
        this.question = data.question
        this.type = data.type
        this.choices = [...data.incorrect_answers, this.correct_answer]
    }

    cleanCorrect(answer) {
        let cleanAnswer = answer.replace(';', '')
        return cleanAnswer
    }

    get QuestionTemplate() {
        if (this.type == 'boolean') {
            return /*html*/`<section class="row justify-content-center">
    
            <div class="col-12 text-center d-flex justify-content-center">
              <div class="question-box bg-light">
                <p class="m-0 p-3">${this.question}
                </p>
              </div>
            </div>
          </section>    
          <section class="row justify-content-center">
    
            <div class="col-12 text-center py-5">
    
              <button onclick="app.questionsController.checkAnswer('True')" class="btn btn-light border border-dark rounded">True</button>
              <button onclick="app.questionsController.checkAnswer('False')" class="btn btn-light border border-dark rounded">False</button>                
            </div>
          </section>`
        } else {
            return /*html*/`<section class="row justify-content-center">
    
            <div class="col-12 text-center d-flex justify-content-center">
              <div class="question-box bg-light">
                <p class="m-0 p-3">${this.question}
                </p>
              </div>
            </div>
          </section>   
          <section class="row justify-content-center">
<div class="col-12 text-center py-5">
          ${this.MultipleTemplate}  
          </div>        
          </section>`
        }
    }

    get MultipleTemplate() {

        // this.choices.sort(() => Math.random() - 0.5)
        let template = ''
        this.choices.forEach(choice => {
            template += /*html*/`
              <button onclick="app.questionsController.checkAnswer('${choice}')" class="btn btn-light border border-dark rounded">${choice}</button>   
            `
        })
        return template
    }
}