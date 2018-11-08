<template>
    <div class="quiz-answer container">
        <v-alert :value="isAnswerCorrect"
                 type="success">You're right!
        </v-alert>
        <v-alert :value="!isAnswerCorrect"
                 type="error"
                 icon="cancel">You're wrong! it was '{{correctAnswer}}'
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: 'quizCorrectAnswer',
        props: [
            'isAnswerCorrect',
            'correctAnswer'
        ]
    }
</script>

<style scoped>
    .quiz-answer p {
        font-size: 18px;
        font-weight: 300;
        padding: 10px;
        width: 100%;
    }
    .quiz-answer p.right {
        background-color: #09b50e75;
    }

    .quiz-answer p.wrong {
        background-color: #ff4c4c85;
    }
    .container.quiz-answer {
        padding-top:0;
        padding-bottom:0;
    }
    .quiz-answer .v-alert {
        margin: 0;
    }
</style>
