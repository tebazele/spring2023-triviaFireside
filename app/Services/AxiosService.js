// @ts-ignore
export const triviaApi = axios.create({
    baseURL: 'https://opentdb.com/api.php',
    params: { amount: 40 },
    timeout: 12000
})