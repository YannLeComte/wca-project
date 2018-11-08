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
    /* The component is a button that displays an answer.
    * If the button is selected, if will be outlined.
    * If the answer is validated, it will be disabled.
    * If the answer is validated and was the one selected,
    * the color will change, depending if the answer was correct or wrong
    */

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
                /* On click on the button, emit the value of the answer */
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
                /* If the answer was validated and selected, change the color */
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
                /* If another answer was selected deselect this one,
                * there are never multiple choices */
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

    /* Overwrite the disabled colors */
    .theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat).correctAnswer{
        background-color: #4caf50!important;
        color: white!important;
    }
    .theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat).wrongAnswer{
        background-color: #ff5252!important;
        color: white!important;
    }
</style>
