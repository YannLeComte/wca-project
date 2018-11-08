<template>
    <div class="quiz">
        <div class="container question-header">
            <h1>Question {{selectedQuestionIndex + 1}} / {{questions.length}}</h1>
            <div class="line"></div>
        </div>
        <quiz-question
                :question="questions[selectedQuestionIndex]"
                @question-answered="onQuestionAnswered">
        </quiz-question>
        <div class="container" v-if="selectedQuestionIndex + 1 === this.userAnswers.length">
            <v-btn block class="primary" @click="nextQuestion">Next</v-btn>
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
    .question-header {
        background-color: #d9d8e640;
        padding-bottom: 10px;
    }
    .line {
        width: 60%;
        border-top: 2px solid;
        margin: auto;
        margin-top: 10px;
    }

</style>
