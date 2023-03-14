import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from '../Utils/Writer.js'

function _drawQuestion() {
    // draw one question at a time 
    let question = appState.questions[0]
    setHTML('trivia-container', question.QuestionTemplate)
}

export class QuestionsController {
    constructor() {
        console.log('Hey there from the questions controller!');
        this.getQuestions()
        appState.on('questions', _drawQuestion)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }

    checkAnswer(answer) {
        questionsService.checkAnswer(answer)
    }

    updatePoints(name, value) {
        questionsService.updatePoints(name, value)
        document.getElementById('jeanne-points').innerText = appState.jeannePoints.toString()
        document.getElementById('class-points').innerText = appState.classPoints.toString()
    }


}