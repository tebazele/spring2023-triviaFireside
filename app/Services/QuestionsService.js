import { triviaApi } from "./AxiosService.js";

class QuestionsService {
    async getQuestions() {
        const response = await triviaApi.get()
        console.log(response.data.results);
    }

}

export const questionsService = new QuestionsService();