import { triviaApi } from "./AxiosService.js";

class QuestionsService {
    async getQuestions() {
        const response = await triviaApi.get('', {
            params: {
                amount: 20,
                difficulty: 'medium'
            }
        })
        console.log("Getting question", response.data.results);
    }

}

export const questionsService = new QuestionsService();