import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";
import { triviaApi } from "./AxiosService.js";

class QuestionsService {

    async getQuestions() {
        const response = await triviaApi.get()
        // console.log(response.data.results);
        appState.questions = response.data.results.map(q => new Question(q))
        console.log(appState.questions);
    }

    async checkAnswer(answer) {

        let currentQuestion = appState.questions[0]
        console.log(currentQuestion);
        if (answer == currentQuestion.correct_answer) {
            Pop.toast('You rock!')
            appState.questions.shift()
            console.log(appState.questions);

            if (!appState.questions[0]) {
                await this.getQuestions()
            }
            appState.emit('questions')

        } else {
            Pop.error('Nope')
        }
    }

    updatePoints(name, value) {
        if (name == 'jeanne') {
            appState.jeannePoints += value

        } else {
            appState.classPoints += value
        }
    }

}

export const questionsService = new QuestionsService();