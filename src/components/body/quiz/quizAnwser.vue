<template>
    <div class="quiz-answer">
        <p class="right" v-if="isAnswerCorrect">You're right!</p>
        <p class="wrong" v-if="!isAnswerCorrect">You're wrong! it was '{{correctAnswer}}'</p>
    </div>
</template>

<script>
    export default {
        name: 'quizAnswer',
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
</style>
