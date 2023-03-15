import { appState } from '../AppState.js';
import { questionsService } from '../Services/QuestionsService.js';
import { Pop } from '../Utils/Pop.js'
import { setHTML, setText } from '../Utils/Writer.js'

function _drawQuestion() {
    setHTML('trivia-container', appState.questions[0].QuestionTemplate)
}
export class QuestionsController {
    constructor() {
        console.log('hello from the questions controller');
        this.getAllQuestions()
        appState.on('questions', _drawQuestion)
    }

    async getAllQuestions() {
        try {
            await questionsService.getAllQuestions();
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    checkAnswer(answer) {
        if (answer == appState.questions[0].correct_answer) {
            Pop.toast('YOU ROCK!!!')
            this.getAllQuestions()
        } else {
            Pop.error('Try again')
        }
    }
}