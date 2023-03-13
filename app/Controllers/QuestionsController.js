import { appState } from '../AppState.js';
import { questionsService } from '../Services/QuestionsService.js';
import { Pop } from '../Utils/Pop.js'
import { setHTML } from '../Utils/Writer.js'

function _drawQuestion() {
    setHTML('trivia-container', appState.question.QuestionTemplate)
}

export class QuestionsController {
    constructor() {
        console.log('hello from the questions controller!');
        this.getQuestions()
        appState.on('question', _drawQuestion)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions();
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    checkAnswer(answer) {
        if (answer == appState.question.correct_answer) {
            Pop.toast('Nice job!')
            this.getQuestions()
        } else {
            Pop.error('Nope')
        }
    }
}