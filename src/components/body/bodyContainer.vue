<template>
    <div class="body-container">
        <div v-if="isQuizzInProcess">
            <question-form v-if="questions.length <= 0" v-on:form-submitted="onSubmitForm"></question-form>
            <quizz v-if="questions.length > 0" v-bind:questions="questions" v-on:quizz-finished="onQuizzFinished"></quizz>
        </div>
        <results v-if="!isQuizzInProcess" v-bind:userAnswers="userAnswers" v-on:quizz-restart="onQuizzRestart"></results>
    </div>
</template>
<script>
    import QuestionForm from "./questionForm/questionForm";
    import Quizz from "./quizz/quizz";
    import Results from "./results/results";

    export default {
        components: {Results, QuestionForm, Quizz},
        name: 'bodyContainer',
        data() {
            return {
                questions: [],
                isQuizzInProcess: true,
                userAnswers: []
            }
        },
        methods: {
            onSubmitForm: function (question) {
                this.questions = question;
            },
            onQuizzFinished: function (userAnswers) {
                this.userAnswers = userAnswers;
                this.isQuizzInProcess = false;
            },
            onQuizzRestart: function () {
                this.questions = [];
                this.isQuizzInProcess = true;
                this.userAnswers = [];
            }
        }
    }
</script>

<style scoped>
    .body-container {
        width: 50%;
        margin: auto;
    }
</style>
