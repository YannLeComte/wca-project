<template>
    <div class="quiz">
        <p class="question" v-if="question" v-html="question.question"></p>
        <div class="container" v-if="answers && answers.length > 0">
            <v-radio-group class="radio-group" v-model="selectedAnswer" :disabled="isValidated">
                <div v-for="answer in answers" :key="answer" class="radio-container">
                    <v-radio :value="answer"></v-radio>
                    <label v-html="answer"></label>
                </div>
            </v-radio-group>
            <v-btn class="primary" v-on:click="validate" v-if="!isValidated" :disabled="selectedAnswer === ''">Validate answer</v-btn>
        </div>
        <quiz-answer
                v-if="isValidated"
                v-bind:isAnswerCorrect="question.correct_answer === selectedAnswer"
                v-bind:correctAnswer="question.correct_answer">
        </quiz-answer>
    </div>
</template>

<script>
    import QuizAnswer from "./quizAnwser";
    import VLabel from "vuetify/lib/components/VLabel/VLabel";
    export default {
        components: {VLabel, QuizAnswer},
        name: 'quizQuestion',
        props: ['question'],
        data: () => ({
            answers: [],
            selectedAnswer: '',
            isValidated: false
        }),
        created() {
            this.shuffle();
            this.isValidated = false
        },
        methods: {
            shuffle: function () {
                this.answers = this.question.incorrect_answers;
                let numberOfAnswers = this.question.incorrect_answers.length + 1;
                let randomIndex = Math.floor(Math.random() * numberOfAnswers) + 1;
                this.answers.splice(randomIndex, 0, this.question.correct_answer);
            },
            validate: function () {
                this.isValidated = true;
                this.$emit('question-answered', this.question.correct_answer === this.selectedAnswer);
            }
        },
        watch: {
            question: function() {
                this.shuffle();
                this.isValidated = false;
            }
        }
    }
</script>

<style scoped>
    .question {
        font-size: 18px;
        font-weight: 300;
        padding: 10px;
        background-color: #574cff40;
        margin-bottom: 0;
    }
    .radio-container {
        padding: 5px;
        display: inline-flex;
    }

    .radio-container label {
        color: rgba(0,0,0,.54);
    }

    .radio-group {
        margin: 0;
    }
    .v-input__slot {
        margin:0;
    }
</style>
