<template>
    <div class="body-container">
        <div v-if="isQuizInProcess">
            <question-form v-if="questions.length <= 0" v-on:form-submitted="onSubmitForm"></question-form>
            <quiz-container v-if="questions.length > 0" v-bind:questions="questions" v-on:quiz-finished="onQuizFinished"></quiz-container>
        </div>
        <results v-if="!isQuizInProcess" v-bind:userAnswers="userAnswers" v-on:quiz-restart="onQuizRestart"></results>
    </div>
</template>
<script>
    import QuestionForm from "./questionForm/questionForm";
    import QuizContainer from "./quiz/quizContainer";
    import Results from "./results/results";

    export default {
        components: {Results, QuestionForm, QuizContainer},
        name: 'bodyContainer',
        data: () => ({
                questions: [],
                isQuizInProcess: true,
                userAnswers: []
        }),
        methods: {
            onSubmitForm: function (question) {
                this.questions = question;
            },
            onQuizFinished: function (userAnswers) {
                this.userAnswers = userAnswers;
                this.isQuizInProcess = false;
            },
            onQuizRestart: function () {
                this.questions = [];
                this.isQuizInProcess = true;
                this.userAnswers = [];
            }
        }
    }
</script>

<style scoped>
    .body-container {
        width: 50%;
        margin: auto;
        min-width: 300px;
        background-color: #dedede0d;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    }
</style>
