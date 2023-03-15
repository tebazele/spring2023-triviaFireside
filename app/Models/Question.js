export class Question {
    constructor(data) {

        this.type = data.type
        this.question = data.question

        // NOTE if we want to make sure we're not getting any weird characters like ' that will mess with our checkAnswer function...
        // STUB create a method that will clean our strings

        // this.correct_answer = this.cleanAnswer(data.correct_answer)
        this.correct_answer = data.correct_answer
        this.choices = [...data.incorrect_answers, this.correct_answer]
    }

    // NOTE cleans the strings; strings are immutable so we must return a new string after cleaning it of weird characters
    cleanAnswer(answer) {
        let cleanedString = answer
        if (answer.includes("'")) {
            // NOTE replace all apostrophes with an empty string
            cleanedString = answer.replaceAll("'", '')
        }
        // NOTE replace all ampersands with an empty string
        if (answer.includes('&')) {
            cleanedString = answer.replaceAll('&', '')
        }
        // NOTE replace both ampersands and apostrophes with empty strings
        if (answer.includes("'") && answer.includes('&')) {
            let noApostrophes = answer.replaceAll("'", '')
            cleanedString = noApostrophes.replaceAll('&', '')
        }
        return cleanedString
    }



    get QuestionTemplate() {
        if (this.type == 'boolean') {

            return `<section class="row justify-content-center">
    
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
            return `<section class="row justify-content-center">
    
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
        this.choices.sort(() => Math.random() - 0.5)
        this.choices.sort(() => Math.random() - 0.5)
        this.choices.sort(() => Math.random() - 0.5)
        let template = ''
        this.choices.forEach(a => {
            template += `<button onclick="app.questionsController.checkAnswer('${a}')" class="btn btn-light border border-dark rounded">${a}</button>`
        })
        return template


    }


}