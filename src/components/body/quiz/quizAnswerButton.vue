<template>
    <div class="quiz-answer-button" @click="onAnswerSelected">
        <v-btn color="info" block
                v-html="answer"
               :class="getValidatedColor()"
               :disabled="isAnswerValidated"
               :outline="isAnswerSelected && !isAnswerValidated"
               ></v-btn>
    </div>
</template>

<script>
    export default {
        name: 'quizAnswerButton',
        props: [
            'answer',
            'selectedAnswer',
            'isAnswerValidated',
            'correctAnswer'
        ],
        data: () => ({
            isAnswerSelected: false
        }),
        methods: {
            onAnswerSelected() {
                if (!this.isAnswerValidated) {
                    this.isAnswerSelected = !this.isAnswerSelected;
                    if (this.isAnswerSelected) {
                        this.$emit('answer-selected', this.answer);
                    } else {
                        this.$emit('answer-selected', '');
                    }
                }
            },
            getValidatedColor() {
                if (this.isAnswerValidated && this.selectedAnswer === this.answer) {
                    if (this.answer === this.correctAnswer ) {
                        return 'correctAnswer';
                    } else {
                        return 'wrongAnswer';
                    }
                }
            }
        },
        watch: {
            selectedAnswer: function () {
                this.isAnswerSelected = this.selectedAnswer === this.answer
            }
        }
    }
</script>

<style scoped>
    .quiz-answer-button {
        padding:10px;
    }
    .quiz-answer-button button {
        height: 60px;
    }
    .theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat){
        background-color: rgba(0,0,0,.12)!important;
    }
    .theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat).correctAnswer{
        background-color: #4caf50!important;
        color: white!important;
    }
    .theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat).wrongAnswer{
        background-color: #ff5252!important;
        color: white!important;
    }
</style>
