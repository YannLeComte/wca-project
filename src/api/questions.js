import axios from 'axios';

const URL_PREFIX = 'api.php?';

export default {
    get(numberOfQuestions, difficulty) {
        return axios.get(URL_PREFIX+'amount=' + numberOfQuestions + '&difficulty=' + difficulty)
            .then(response => {
                return response.data.results
            })
    }
}
