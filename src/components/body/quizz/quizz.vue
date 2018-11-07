<template>
  <div class="quiz">
      <quizz-question v-bind:question="questions[selectedQuestionIndex]" v-on:question-answered="onQuestionAnswered"></quizz-question>
      <button v-on:click="nextQuestion" v-if="selectedQuestionIndex + 1 === this.userAnswers.length">Next</button>
  </div>
</template>

<script>
    import QuizzQuestion from "./quizzQuestion";

    export default {
        components: {QuizzQuestion},
        name: 'quizz',
        data() {
            return {
                selectedQuestionIndex: 0,
                userAnswers: []
            }
        },
        props: ['questions'],
        created() {
        },
        methods: {
            nextQuestion: function () {
                if (this.selectedQuestionIndex < this.questions.length - 1 ) {
                    this.selectedQuestionIndex++;
                } else {
                    this.$emit('quizz-finished', this.userAnswers);
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
