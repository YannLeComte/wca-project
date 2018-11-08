<template>
    <div class="quiz">
        <p class="question" v-if="question" v-html="question.question"></p>
        <div class="container" v-if="answers && answers.length > 0">
            <div class="answers-container">
                <quiz-answer-button v-for="answer in answers" :key="answer"
                                    :selectedAnswer="selectedAnswer"
                                    :answer="answer"
                                    :correctAnswer="question.correct_answer"
                                    :isAnswerValidated="isAnswerValidated"
                                    @answer-selected="onAnswerSelected">
                </quiz-answer-button>
            </div>
        </div>
        <div class="container validation" v-if="!isAnswerValidated">
            <v-btn class="primary" block
                   @click="validate"
                   :disabled="selectedAnswer === ''">Validate answer</v-btn>
        </div>
        <quiz-correct-answer
                v-if="isAnswerValidated"
                :isAnswerCorrect="question.correct_answer === selectedAnswer"
                :correctAnswer="question.correct_answer">
        </quiz-correct-answer>
    </div>
</template>

<script>
    import QuizCorrectAnswer from "./quizCorrectAnwser";
    import QuizAnswerButton from "./quizAnswerButton";
    export default {
        components: {QuizAnswerButton, QuizCorrectAnswer},
        name: 'quizQuestion',
        props: ['question'],
        data: () => ({
            answers: [],
            selectedAnswer: '',
            isAnswerValidated: false
        }),
        created() {
            this.shuffle();
            this.isAnswerValidated = false
        },
        methods: {
            shuffle: function () {
                this.answers = this.question.incorrect_answers;
                let numberOfAnswers = this.question.incorrect_answers.length + 1;
                let randomIndex = Math.floor(Math.random() * numberOfAnswers) + 1;
                this.answers.splice(randomIndex, 0, this.question.correct_answer);
            },
            validate: function () {
                this.isAnswerValidated = true;
                this.$emit('question-answered', this.question.correct_answer === this.selectedAnswer);
            },
            onAnswerSelected: function (answer) {
                this.selectedAnswer = answer;
            }
        },
        watch: {
            question: function() {
                this.shuffle();
                this.isAnswerValidated = false;
            }
        }
    }
</script>

<style scoped>
    .question {
        font-size: 18px;
        font-weight: 300;
        background-color: #d9d8e640;
        margin-bottom: 0;
        padding: 0 34px 34px 34px;
        text-align: center;
    }

    .answers-container {
        display: grid;
        width: 100%;
        grid-template-columns: 50% 50%;
    }

    .container.validation {
        padding-top: 0;
    }

    .quiz-answer-button:nth-child(even) {
        padding-right: 0;
    }
    .quiz-answer-button:nth-child(odd) {
        padding-left: 0;
    }
    .quiz-answer-button:nth-child(1), .quiz-answer-button:nth-child(2) {
        padding-top: 0;
    }
    .quiz-answer-button:last-child, .quiz-answer-button:nth-last-of-type(-n+2) {
        padding-bottom: 0;
    }
</style>
