<template>
    <div class="quiz">
        <div class="container">
            <h1>Question {{selectedQuestionIndex + 1}}</h1>
        </div>
        <quiz-question v-bind:question="questions[selectedQuestionIndex]" v-on:question-answered="onQuestionAnswered"></quiz-question>
        <div class="container" v-if="selectedQuestionIndex + 1 === this.userAnswers.length">
            <v-btn class="primary" v-on:click="nextQuestion">Next</v-btn>
        </div>
    </div>
</template>

<script>
    import QuizQuestion from "./quizQuestion";

    export default {
        components: {QuizQuestion},
        name: 'quizzContainer',
        data: () => ({
            selectedQuestionIndex: 0,
            userAnswers: []
        }),
        props: ['questions'],
        created() {
        },
        methods: {
            nextQuestion: function () {
                if (this.selectedQuestionIndex < this.questions.length - 1 ) {
                    this.selectedQuestionIndex++;
                } else {
                    this.$emit('quiz-finished', this.userAnswers);
                }
            },
            onQuestionAnswered: function (isAnswerCorrect) {
                this.userAnswers.push(isAnswerCorrect);
            }
        }
    }
</script>

<style scoped>
</style>
