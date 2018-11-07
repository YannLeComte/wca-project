<template>
    <div class="form-container">
        <div class="question-form">
            <v-text-field type="number" name="numberOfQuestions" min="1" max="50" v-model="numberOfQuestions"></v-text-field>
            <v-select :items="difficulties" v-model="difficulty" label="Difficulty" attach></v-select>
            <v-btn v-on:click="submit">Submit</v-btn>
        </div>
    </div>
</template>

<script>
    import questionsAPI from '../../../api/questions'

    export default {
        name: 'questionForm',
        data: () => ({
            numberOfQuestions: 0,
            difficulty: '',
            questions: [],
            difficulties: ['easy', 'medium', 'hard']
        }),
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
