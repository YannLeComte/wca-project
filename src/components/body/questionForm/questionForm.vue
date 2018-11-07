<template>
    <div class="form-container">
        <div class="question-form">
            <input type="number" name="numberOfQuestions" min="1" max="50" v-model="numberOfQuestions">
            <select v-model="difficulty">
                <option value="easy" selected>Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button v-on:click="submit">Submit</button>
        </div>
    </div>
</template>

<script>
    import questionsAPI from '../../../api/questions'

    export default {
        name: 'questionForm',
        data() {
            return {
                numberOfQuestions: 0,
                difficulty: '',
                questions: []
            }
        },
        methods: {
            submit: function () {
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
