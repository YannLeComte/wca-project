<template>
    <div class="question-form container">
        <h1>Welcome to the Super Quiz!</h1>
        <v-form v-model="valid">
            <v-text-field type="number" min="1" max="50"
                          v-model="numberOfQuestions"
                          label="Number of questions"
                          :rules="rules.numberOfQuestion" required>
            </v-text-field>
            <v-select :items="difficulties"
                      v-model="difficulty"
                      label="Choose a difficulty level" attach
                      :rules="rules.difficulty" required>
            </v-select>
            <v-btn block class="primary"
                   @click="GetQuestions"
                   :disabled="!valid">Start the super quiz!
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    import questionsAPI from '../../../api/questions'

    /* This component is a form to enter a number of questions and a difficulty,
    * it will return a list of question with an emit to 'form-submitted'
    *
    * Rules:
    * - The number of question needs to be between 0 and 50
    * - Both inputs are required
    * */

    export default {
        name: 'questionForm',
        data: () => ({
            valid: false,
            numberOfQuestions: 0,
            difficulty: '',
            questions: [],
            difficulties: ['easy', 'medium', 'hard'],
            rules: {
                numberOfQuestion: [value => value > 0 && value < 50 || 'The number needs to be between 0 and 50'],
                difficulty: [value => !!value || 'Difficulty level is required']
            }
        }),
        methods: {
            GetQuestions: function () {
                 /* Get the list of question form the API */
                questionsAPI.get(this.numberOfQuestions, this.difficulty)
                    .then(posts => {
                        this.questions = posts;
                        this.$emit('form-submitted', this.questions);
                    })
                    .catch(error => console.log(error))
                    .finally(() => {
                        this.loading = false
                    })
            }
        }
    }
</script>

<style scoped>
</style>
