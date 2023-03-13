import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { triviaApi } from "./AxiosService.js";

class QuestionsService {
    async getQuestions() {
        const response = await triviaApi.get('')
        console.log("Getting question", response.data.results);
        appState.question = response.data.results.map(q => new Question(q))[0]
        // FIXME 

    }

}

export const questionsService = new QuestionsService();

// {
// params: {
//     amount: 20,
//         difficulty: 'medium'
// }
//         }