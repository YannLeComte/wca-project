import axios from 'axios';

const URL_PREFIX = 'api.php?';

export default {
    /* Get a list of questions with a given difficulty, and number of questions */
    get(numberOfQuestions, difficulty) {
        return axios.get(URL_PREFIX+'amount=' + numberOfQuestions + '&difficulty=' + difficulty)
            .then(response => {
                return response.data.results
            })
    }
}
