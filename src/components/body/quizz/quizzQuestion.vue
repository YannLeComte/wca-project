<template>
    <div class="quiz">
        <p v-if="question">{{question.question}}</p>
        <div v-if="answers && answers.length > 0">
            <div v-for="(answer, index) in answers" :key="index">
                <input type="radio" name="feature" :value="answer" v-model="selectedAnswer" :disabled="isValidated"/>
                <label :for="answer">{{answer}}</label>
            </div>
        </div>
        <button v-on:click="validate" :disabled="isValidated">Validate answer</button>
        <quizz-answer v-if="isValidated" v-bind:isAnswerCorrect="question.correct_answer === selectedAnswer" v-bind:correctAnswer="question.correct_answer"></quizz-answer>
    </div>
</template>

<script>
    import QuizzAnswer from "./quizzAnwser";
    export default {
        components: {QuizzAnswer}, name: 'quizzQuestion',
        props: ['question'],
        data() {
            return {
                answers: [],
                selectedAnswer: '',
                isValidated: false
            }
        },
        created() {
            this.shuffle();
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
</style>
