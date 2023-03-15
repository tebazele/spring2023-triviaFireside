import { appState } from '../AppState.js';
import { Question } from '../Models/Question.js';
import { triviaApi } from '../Services/AxiosService.js'
class QuestionsService {
    async getAllQuestions() {
        const response = await triviaApi.get()
        // console.log(response.data.results);
        appState.questions = response.data.results.map(q => new Question(q))
        console.log(appState.questions);
    }

}

export const questionsService = new QuestionsService();