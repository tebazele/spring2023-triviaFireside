import { questionsService } from '../Services/QuestionsService.js';
import { Pop } from '../Utils/Pop.js'

export class QuestionsController {
    constructor() {
        console.log('hello from the questions controller!');
        this.getQuestions()
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions();
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}