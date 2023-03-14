// @ts-ignore
export const triviaApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10',
    timeout: 12000
})
